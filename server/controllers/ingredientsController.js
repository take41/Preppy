const db = require('../models/userModels');


const ingredientsController = {};

ingredientsController.addIngredients = (req, res, next) => {
  const { ingredients } = req.body;
  const params = [ingredients];
  const ingQuery = 'INSERT INTO ingredients_table (ingredients) VALUES ($1)';

  // if(ingredients === undefined) return next('No empty ingredient fields.')

  db.query(ingQuery, params)
    .then((result) => {
      res.locals.ingredients = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err)
    })
}


ingredientsController.getIngredients = (req, res, next) => {
    const id = [req.query.id];
    // const {ingredients} = req.body
    //  const params = [ingredients];
    const stringQuery = `SELECT ingredients FROM ingredients_table`;
  
    // if(ingredients === undefined) return next('No empty ingredient fields.')
  
    db.query(stringQuery)
      .then((result) => {
        // console.log('req body', req.body, 'res', res.locals, 'req query', req.query)
        // res.locals.ingredients = 'happyy';
        console.log(result)
        res.locals.ingredients = result.rows;
        return next();
      })
      .catch((err) => {
        return next(err)
      })
    // query(stringQuery, (err, res) => {
    //   // console.log(res.rows);
    //   // console.log(res.rows)
    //   // db.end();
    //   // pool.end()
    //   console.log(err, 'err', res, 'res')
    // //   let x = [];
    // //   res.rows.forEach(el => x.PushManager(res.rows.ingredients));
    // //   console.log(x)
    //   // res.locals.ingredients = res.rows;
    //   // res.locals.ingredients = res.rows;
    //   next()
    // })
  }

// ingredientsController.getIngredients = (req, res, next) => {

// }
module.exports = ingredientsController;
