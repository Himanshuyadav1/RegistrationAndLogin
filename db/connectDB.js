const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        const options = {
            dbName: 'GuestHouse'
        };

        await mongoose.connect(url, options);
        console.log("Connected to DB successfully!!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;