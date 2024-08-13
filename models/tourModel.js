const mongoose = require('mongoose');

// Our Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String, //schema option
    required: [true, 'A tour must have a name'],
    unique: true, // schema option
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
