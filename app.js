const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const URI = process.env.URI || 'mongodb://127.0.0.1:27017';
const connectDB = require('./db/connectDB');
const router = require('./routes/router');

// DB connection
connectDB(URI);

app.use('/', router);

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});