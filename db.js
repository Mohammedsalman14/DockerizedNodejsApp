// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db', // Use service name 'db' as the hostname
    user: 'salman',
    password: 'salman14ms',
    database: 'nodejs_signup'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
