const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const URI = process.env.URI || 'mongodb://127.0.0.1:27017';
const connectDB = require('./db/connectDB');

app.get('/', (req, res) => {
    res.send("Hello from server....")
})

// DB connection
connectDB(URI);

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});