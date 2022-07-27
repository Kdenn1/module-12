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