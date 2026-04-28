const express = require('express');
const router = express.Router();
const { slowReq } = require('../controllers/slowReq');

router.get('/', slowReq);
module.exports = {router};
  