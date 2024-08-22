const Tour = require('../models/tourModel');
const tour = require('../models/tourModel');

exports.getAllTour = async (req, res) => {
  const queryObj = { ...req.query };
  const excludeFields = ['page', 'sort', 'limit', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Tour.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
    console.log(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  await query
    .then((_tour) => {
      res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tour.length,
        data: { _tour },
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'Something is F*',
        message: err,
      });
    });
};

exports.getTour = async (req, res) => {
  await Tour.findById(req.params.id)
    .then((_tour) => {
      res.status(200).json({
        status: 'success',
        data: { _tour },
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'Something is F*',
        message: err,
      });
    });
};

exports.createTour = async (req, res) => {
  await Tour.create(req.body)
    .then((newTour) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'Something is F*',
        message: err,
      });
    });
};

exports.updateTour = (req, res) => {
  Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((updatedTour) => {
    res.status(200).json({
      status: 'success',
      data: {
        tour: updatedTour,
      },
    });
  });
};

exports.deleteTour = async (req, res) => {
  await Tour.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).json({
        status: 'success',
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 'Something is F*',
        message: err,
      });
    });
};
