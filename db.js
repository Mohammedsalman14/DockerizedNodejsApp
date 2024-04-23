// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'salman',
    password: 'salman14ms',
    database: 'nodejs_signup'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
