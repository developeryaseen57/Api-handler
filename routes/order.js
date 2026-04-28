const express = require('express');
const router = express.Router();
const { getOrder, getAllOrders, createOrder, updateOrder, deleteOrder, getUserOrders } = require('../controllers/order');

router.get('/:id', getOrder);
router.post('/userOrder', getUserOrders);
router.get('/', getAllOrders);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = {router};
 