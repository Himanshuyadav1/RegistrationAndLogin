const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("homepage");
});

router.get('/login', (req, res) => {
    res.render("login");
});

router.get('/registration', (req, res) => {
    res.render("registration");
});

module.exports = router;