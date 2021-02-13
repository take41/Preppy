const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = 3000;
const apiRouter = require('./routes/api');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
})

// Handles all other unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;