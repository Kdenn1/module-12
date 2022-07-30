//set const variables 
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const promisemysql = require("promise-mysql");

//port and connection 
const connectionProperties = {
    host: "localhost",
    port: 3000, 
    user: "root",
    password: "password",
    database: "employees_DB"
}

const connect = mysql.createConnection(connectionProperties);

//connect to the database 
connect.connect((err) => {
    if(err) throw err;

    //starting screen message in terminal
    console.log("\n Employee Tracker by Kaeden Wodke \n");
    //call the main menu function 
    mainMenu(); 
}) 

//MAIN MENU FUNCTION SECTION 
//this section contains the main menu options list 
function mainMenu() {
    //give user a list of options to choose from 
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "MENU",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ]
    })
    //add outcomes depending on what user chooses 
    // still need to write functions for each declared path below 
    .then((answer) => {

        switch (answer.action) {
            case "View all departments":
                viewAllDep();

            case "Delete department":
                deleteDept();
            
            case "View all roles":
                viewAllRoles();

            case "View all employees":
                viewAllEmp();

            case "Add a department":
                addDep();

            case "Add a role":
                addRole();

            case "Delete role":
                deleteRole();

            case "Add an employee":
                addEmp();

            case "Delete employee":
                deleteEmp();

            case "Update an employee role":
                updateEmpRole();
        }
    });
}

//SECTION FOR OPTION FUNCTIONS 

//to view employees 
function viewAllEmp() {

    //fetch all the datapoints 
    let query = "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";

    //connection from the query 
    connection.query(query, function(err, res) {
        //if an error return an err message 
        if(err) return err;
        console.log("error");

        //show the results from the query response 
        console.table(res);

        //to get back to main menu
        mainMenu();
    })
}

//to add employees to the roster
function addEmp() {
    //make 2 arrays to hold this data 
    let roleArr = [];
    let managerArr = [];

    // make the connection 
    promisemysql.createConnection(connectionProperties).then((conn) => {
        // query all the roles 
        return Promise.all([
            conn.query('SELECT id and title from the role order by title'),
            conn.query("SELECT employee.id, concat(employee.first_name, ' ', employee.last_name) AS employee from employee order by employee ASC")
        ]);
    }).then(([roles, managers]) => {
        //place the roles into an array with a for loop
        for (i=0; i < roles.length; i++) {
            roleArr.push(roles[i].title);
        }
    })
}
//when i come back to this assignment i need to do this similar thing for the other options in the menu 