const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

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

//Our Modal
const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Bed Camper',
  rating: 5.0,
  price: 270,
});

testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`LISTEN ON PORT: ${port}!`);
});
