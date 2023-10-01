const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {
    static homePage = (req, res) => {
        res.render('homepage', { title: 'Home Page' });
    }

    static loginPage = (req, res) => {
        res.render('login', { title: 'Login Page' });
    }

    static registrationPage = (req, res) => {
        res.render('registration', { title: 'Registration Page' });
    }

    static userRegistration = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, saltRounds); 
            const user = new UserModel({
                name,
                email,
                password: hashedPassword
            });
            await user.save();
            console.log('User created!!');            
            res.redirect('/login');
        } catch (error) {
            console.log(error);
        }
    }

    static userLogin = async (req, res) => {
        try {
            // Fetching email password from form
            const { email, password } = req.body;
            // finding the user through email
            const user = await UserModel.find({ email });                                    
            // Comparing the provided password with stored password in DB
            const match = await bcrypt.compare(password, user[0].password);
            if(match) {
                res.redirect('/');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserController;