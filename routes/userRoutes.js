const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
const { getAllUsers, createUser, getUser, updateUser, deleteUser } =
  userController;

const { signup, login, forgotPassword, resetPassword, updatePassword } =
  authController;

//USER ROUTES

router.post('/signup', signup);
router.post('/login', login);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
