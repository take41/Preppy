const db = require('../models/userModels');

const mealController = {};

mealController.addMeal = (req, res, next) => {
  const {meal_name} = req.body;
  const params = [meal_name];
  const meal = 'INSERT INTO meals_table (meal_name) VALUES ($1)';

  if(!meal_name) return next("Please enter a delicious meal that you'd like to make");

  db.query(meal, params)
    .then(result => {
      res.locals.meal = result.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('eerr')
      return next(err);
    })
};


mealController.deleteMeal = (req, res, next) => {
  const {meal_name} = req.body;
  const params = [meal_name];
  const meal = 'DELETE FROM meals_table WHERE meal_name = $1 LIMIT 1';

  db.query(meal, params)
    .then(result => {
      // console.log(result, params)
      res.locals.meal = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err)
    })
};

mealController.getMeal = (req, res, next) => {
  // const { id } = req.query.id;
  const meal = 'SELECT meal_name FROM meals_table';

  db.query(meal)
  .then((result) => {
    // console.log(req.query.id)
    // console.log('res', result.rows)
    // console.log('meal req', req)
    res.locals.meals = result.rows;
    return next();
  })
  .catch((err) => {
    return next(err)
  })
}

module.exports = mealController;