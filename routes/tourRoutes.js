const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

const { getAllTour, getTour, createTour, updateTour, deleteTour } =
  tourController;

// router.param('id', checkId);

router.route('/').get(getAllTour).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
