const mongoose = require('mongoose');

const { Schema } = mongoose;

const MealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pictureLink: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  nutritionFacts: {
    type: String
  },
  state: {
    // current, archived
    type: String
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      rating: { type: String },
      statement: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('meal', MealSchema);
