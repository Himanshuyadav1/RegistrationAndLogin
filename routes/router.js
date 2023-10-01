const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', UserController.homePage);

router.get('/login', UserController.loginPage);

router.get('/registration', UserController.registrationPage);

router.post('/registration', UserController.userRegistration)

module.exports = router;