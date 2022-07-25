// get the client 
const mysql = require('mysql2');

// create the connection to the database 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

module.exports = db;