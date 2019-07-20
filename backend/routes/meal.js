const express = require('express');

const router = express.Router();
const passport = require('passport');
const mealController = require('../controllers/mealController/index.js');
const keys = require('../config/keys.ignore');

// @route  POST api/meal
// @desc   Create meal
// @access Public
// @errors

router.post(
  '/',
  // passport.authenticate('jwt', { session: false }),
  mealController.createMeal
);

module.exports = router;
