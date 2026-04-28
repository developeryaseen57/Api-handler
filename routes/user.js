const express = require('express');
const router = express.Router();
const { getUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user');

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = {router};
  