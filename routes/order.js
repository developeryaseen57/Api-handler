const express = require('express');
const router = express.Router();
const { getOrder, getAllOrders } = require('../controllers/order');

router.get('/:id', getOrder);
router.get('/', getAllOrders);

module.exports = {router};
 