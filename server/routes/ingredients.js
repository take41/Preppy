const express = require('express');
const ingredientsController = require('../controllers/ingredientsController');
const router = express.Router();

router.get('/:id',
   ingredientsController.getIngredient,
  (req, res) => {
  res.json(res.locals.ingredients);
  // res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

router.put('/:id',
  ingredientsController.updateIngredient,
  (req, res) => {
  res.status(200).json(res.locals.ingredients);
});

router.delete('/:id',
  ingredientsController.deleteIngredient,
  (req, res) => {
    console.log('successfully deleted')
});

module.exports = router;