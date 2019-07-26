const mongoose = require('mongoose');

// Models
const Meal = mongoose.model('meal');

module.exports = (req, res) => {
  const errors = {};

  Meal.find()
    .sort({ date: -1 })
    .then((meals) => {
      if (meals.length === 0) {
        errors.nomeals = 'No meals found';
        return res.status(404).json(errors);
      }
      return res.json(meals);
    })
    .catch((err) => {
      errors.error = 'Error fetching meals from database';
      res.status(500).json({ ...errors, ...err });
    });
};
