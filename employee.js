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
    .then((answer) => {

        switch (answer.action) {
            case "View all departments":
                viewAllDep();
            
            case "View all roles":
                viewAllRoles();

            case "View all employees":
                viewAllEmp();

            case "Add a department":
                addDep();

            case "Add a role":
                addRole();

            case "Add an employee":
                addEmp();

            case "Update an employee role":
                updateEmpRole();
        }
    });
}