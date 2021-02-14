// // Router to handle different types of requests
// const express = require('express');
// const userController = require('../controllers/userController');
// const router = express.Router();

// //user will be sent to the login page
// router.get('/', (req, res) => {
//   res.render('./../views/login');
// });

// //redirects user to the signup page
// router.get('/signup', (req, res) => {
//   res.render('./../views/signup', {error: null});
// });

// //after signing up, user will be sent back to the login page
// router.post('/signup', (req, res) => {
//   console.log(res.locals.createUser)
//   userController.createUser,
//   (req, res) => {
//     res.render('./../views/login')
//   }
// });


// module.exports = router;