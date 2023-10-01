const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello from server....")
})

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});