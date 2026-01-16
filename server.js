// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 3000;

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/submit", (req, res) => {
//   const name = req.body.name;
//   res.send(`Hello ${name}, your form is submitted successfully`);
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// Create a simple server.js file
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js server!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});