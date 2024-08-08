const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();
const { getAllUsers, createUser, getUser, updateUser, deleteUser } =
  userController;

//USER ROUTES
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
