const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  numberOfMeals: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  shippingFees: {
    type: String
  },
  review: {
    rating: { type: String },
    statement: { type: String }
  },
  state: {
    // placed, cooking, ontheway, delivered, cancelled
    type: String,
    required: true
  },
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'meal'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('order', OrderSchema);
