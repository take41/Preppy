const db = require('../models/userModels');

const ingredientsController = {};

ingredientsController.addIngredient = (req, res, next) => {
  const { ingrList } = req.body;
  const params = [ingrList];
  const ingQuery = 'INSERT INTO ingredients_table (ingredients) VALUES ($1)';

  db.query(ingQuery, params)
    .then((result) => {
      res.locals.ingredients = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err)
    })
};

ingredientsController.getIngredient = (req, res, next) => {
    const id = [req.query.id];
    const stringQuery = `SELECT ingredients FROM ingredients_table WHERE _id = $1`;
  
    db.query(stringQuery, id)
      .then((result) => {
        res.locals.ingredients = result.rows;
        return next();
      })
      .catch((err) => {
        return next(err)
      })
  };

ingredientsController.updateIngredient = (req, res, next) => {
  const updateQuery = 'UPDATE ingredients_table SET ingredients = $1 WHERE _id = $2';
  const params = [req.body.ingredients, req.params.id];

  db.query(updateQuery, params)
    .then(result => {
      res.locals.ingredients = result.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    })
};

ingredientsController.deleteIngredient = (req, res, next) => {
  const params = [req.params.id];
  const deleteQuery = 'DELETE FROM ingredients_table WHERE _id = $1';

  db.query(deleteQuery, params)
    .then(result => {
      res.locals.ingredients = result.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    })
};

module.exports = ingredientsController;
