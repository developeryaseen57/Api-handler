const express = require('express');
const router = express.Router();
const { getUser, getAllUsers } = require('../controllers/user');

router.get('/:id', getUser);
router.get('/', getAllUsers);
module.exports = {router};
  