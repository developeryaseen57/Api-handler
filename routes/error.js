const express = require('express');
const router = express.Router();
const { giveError }  = require('../controllers/error');

router.get('/', giveError);
module.exports = {router};



