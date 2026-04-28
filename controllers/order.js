const Order = require('../models/Order');
const User = require('../models/User');

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find().populate('userId', 'name email');
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}



async function getOrder(req, res) {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate('userId', 'name email');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
   return res.status(200).json(order);
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
}

async function createOrder(req, res) {
  try {
    const { userId, product, amount, status } = req.body;
    if (!userId || !product || !amount) {
      return res.status(400).json({ error: 'userId, product and amount are required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const order = await Order.create({
      userId,
      product,
      amount,
      status
    });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getUserOrders(req, res) {
  try {
    const { userId } = req.body;
    const orders = await Order.find({ userId });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateOrder(req, res) {
  try {
    const { id } = req.params;
    const { product, amount, status } = req.body;
    const order = await Order.findByIdAndUpdate(
      id,
      { product, amount, status },
      { new: true, runValidators: true }
    ).populate('userId', 'name email');
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteOrder(req, res) {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getOrder, getAllOrders, createOrder, updateOrder, deleteOrder, getUserOrders }