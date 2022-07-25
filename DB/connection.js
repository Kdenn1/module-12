// get the client 
const mysql = require('mysql2');

// create the connection to the database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});
