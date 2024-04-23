// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Signup Form
app.get('/', (req, res) => {
    res.render('signup');
});

// Form Submission
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const newUser = { username, email, password };

    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) throw err;
        res.render('success');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
