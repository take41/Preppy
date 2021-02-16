// // Router to handle different types of requests
const express = require('express');
const mealController = require('../controllers/mealController');
const router = express.Router();

//GET one meal by id
router.get('/:id',
  mealController.getMeal,
  (req, res) => {
    /*gets the id of the specfic id added in /meal/:id*/
  res.status(200).json(res.locals.meals);
});

//Add a new meal
// router.post('/',
//   mealController.addMeal,
//   (req, res) => {
//     res.status(200).json('/home')
// });

router.put('/:id',
  mealController.updateMeal,
  (req, res) => {
    return res.status(200).json(res.locals.meals);
});  

router.delete('/:id',
  mealController.deleteMeal,
  (req, res) => {
    console.log('deleted meal');
});

module.exports = router;