const db = require('../models/userModels');

const mealController = {};

mealController.addMeal = (req, res, next) => {
  const {mealname} = req.body;
  const params = [mealname];
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
  const params = [req.params.id];
  const deleteQuery = 'DELETE FROM meals_table WHERE _id = $1';

  db.query(deleteQuery, params)
    .then(result => {
      res.locals.meal = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err)
    })
};

mealController.getMeal = (req, res, next) => {
  //$1 is a parametized query, which is taking it's first parameter from the first value in the id array on line 42;
  const id = [req.params.id];
  const mealQuery = 'SELECT meal_name FROM meals_table WHERE _id = $1';

  db.query(mealQuery, id)
  .then((result) => {
    // console.log(req.query.id)
    res.locals.meals = result.rows[0];
    return next();
  })
  .catch(err => {
    return next(err);
  })
};

mealController.updateMeal = (req, res, next) => {
  const updateQuery = 'UPDATE meals_table SET meal_name = $1 WHERE _id = $2';
  const params = [req.body.meal_name, req.params.id];

  db.query(updateQuery, params)
    .then((result) => {
      // console.log(result.rows[0])
      res.locals.meals = result.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    })
};
module.exports = mealController;