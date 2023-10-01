const mongoose = require('mongoose');

// Creating Schema for User
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true },
    join: { type: Date, default: Date.now }
});

// Creating model for user
const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;