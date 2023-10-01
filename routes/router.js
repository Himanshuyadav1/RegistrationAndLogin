const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Home Page");
});

router.get('/login', (req, res) => {
    res.send("Login Page");
});

router.get('/registration', (req, res) => {
    res.send("Registration Page");
});

module.exports = router;