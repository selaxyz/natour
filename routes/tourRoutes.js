const express = require('express');
const tourController = require('../controllers/tourControllers');
const router = express.Router();

const {
  getAllTour,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkId,
  checkBody,
} = tourController;

router.param('id', checkId);

router.route('/').get(getAllTour).post(checkBody, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
