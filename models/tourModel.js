const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'A location must have a description'],
  },
  type: {
    type: String,
    default: 'Point',
    enum: ['Point'],
  },
  coordinates: {
    type: [Number],
    required: [true, 'A location must have coordinates'],
  },
  address: String,
  day: Number,
});

// Our Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
    maxlength: [40, 'A tour name must have less or equal than 40 characters'],
    minlength: [10, 'A tour name must have more or equal than 10 characters'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult',
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
  // startLocation: {
  //   // GeoJSON
  //   type: locationSchema,
  //   required: [true, 'A tour must have a start location'],
  // },
  // locations: [locationSchema],
  // guides: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: 'User',
  //   },
  // ],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
