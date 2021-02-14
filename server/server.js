const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = 3000;
const apiRouter = require('./routes/api');
const app = express();
const userController = require('./controllers/userController');
// const flash = require('connect-flash')

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/build', express.static(path.join(__dirname, '../build')));
// app.use(flash());
// app.use('/api', apiRouter)

//user will be sent to the login page
app.get('/', (req, res) => {
  res.render('./../views/login');
});

//redirects user to the signup page
app.get('/signup', 
  (req, res) => {
  res.render('./../views/signup', {error: null});
});

//after signing up, user will be sent back to the login page
app.post('/signup', 
  // console.log('req.body', req.body)
  userController.createUser,
  (req, res) => {
    res.render('./../views/login')
  }
);

app.post('/home', 
  userController.verifyUser,
  (req, res) => {
    // res.status(200).send('logged in')
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// Handles all other unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json(err)
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;