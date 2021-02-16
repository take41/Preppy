const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require('cors');
const PORT = 3000;
const mealRouter = require('./routes/meal');
const ingredientsRouter = require('./routes/ingredients');
const app = express();
const userController = require('./controllers/userController');
const mealController = require('./controllers/mealController');
const ingredientsController = require("./controllers/ingredientsController");

app.use('/public', express.static(__dirname + '/public'))
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/build', express.static(path.join(__dirname, '../build')));

//user will be sent to the login page
app.get('/', 
  (req, res) => {
  res.render('./../views/login');
});

/*********** SIGN UP BEG **************/
//redirects user to the signup page
app.get('/signup', 
  (req, res) => {
  res.render('./../views/signup', {error: null});
});

//after signing up, user will be sent back to the login page
app.post('/signup', 
  userController.createUser,
  (req, res) => {
    res.render('./../views/login')
  }
);
/********  SIGN UP END ***********/

//Verify user, then send them to the home page
app.post('/home', 
userController.verifyUser,
(req, res) => {
  res.cookie('user', res.locals.user);
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

///// Routers for for meals and ingredients ////////

app.use('/meal', mealRouter);
app.use('/ingredients', ingredientsRouter);

//////// Add a new meal & ingredients //////////////////////

//POST request to meals/ingredients are not in the router because they are being redirected back to the index.html
app.post('/meal',
  mealController.addMeal,
  (req, res) => {
    res.send('working :D')
});

app.post('/ingredients',
  ingredientsController.addIngredient,
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

// Handles all other unknown routes //
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler //
app.use((err, req, res, next) => {
  res.status(500).send(err)
  res.status(404).send("Not Found");
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;