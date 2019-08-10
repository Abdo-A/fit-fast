const mongoose = require('mongoose');
const validator = require('validator');

// Models
const Meal = mongoose.model('meal');

module.exports = createMeal = (req, res) => {
  const errors = {};

  const newMeal = {
    pictures: req.body.pictures.map((pictureLink) => ({
      link: pictureLink
    })),
    name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
    price: req.body.price,
    ingredients: req.body.ingredients,
    nutritionFacts: req.body.nutritionFacts
  };

  new Meal(newMeal)
    .save()
    .then((meal) => res.json({ meal, success: true }))
    .catch((err) => {
      errors.error = 'Error saving meal into the database';
      res.status(500).json({ ...errors, ...err });
    });
};
