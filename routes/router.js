const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("homepage", { title: "Home Page" });
});

router.get('/login', (req, res) => {
    res.render("login", { title: "Login Page" });
});

router.get('/registration', (req, res) => {
    res.render("registration", { title: "Registration Page" });
});

module.exports = router;