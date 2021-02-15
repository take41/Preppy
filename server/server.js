const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = 3000;
// const apiRouter = require('./routes/api');
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
app.get('/', (req, res) => {
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

app.post('/home', 
  userController.verifyUser,
  (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

/*************  MEALS BEG ****************/
app.get('/meal/',
  mealController.getMeal,
  (req, res) => {
  res.send(res.locals.meals);
  // res.render('./../views/meal');
})

////// Add a new meal 
app.post('/meal/:id',
  mealController.addMeal,
  // ingredientsController.addIngredients,
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

//////// Delete a meal ///////////
// app.delete('/meal')

/*************** MEALS END *******************/

/************ INGREDIENTS BEG ****************/

app.get('/ingredients',
   ingredientsController.getIngredients,
  (req, res) => {
  res.json(res.locals.ingredients);
  // res.render('./../views/ingredients');
  // res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

app.post('/ingredients',
  ingredientsController.addIngredients,
  (req, res) => {
    // res.send('meals working :D')
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

// app.delete('/ingredients')
/************** INGREDIENTS END ***************/

//client side-  post req with the mealname and ingredients
//server side - send back meal name,
//coupon button - get request to the server to get ingredients info from api
//completed 
//ingredients GET request completed client side


/***************TODO************* */
// delete meal functionality
// delete ingredient functionality
// get ingredient functionality


// Handles all other unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).send(err)
  res.status(404).send("Not Found");
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;