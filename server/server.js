const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
})

app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});
  
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;