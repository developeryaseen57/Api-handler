const { orders } = require('../helper/data');

async function getAllOrders(req, res) {
  try {
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}



async function getOrder(req, res) {
  try {
    const { id } = req.params;
    const order = orders.find(order => order.id === Number(id));
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
   return res.status(200).json(order);
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
}

module.exports = { getOrder, getAllOrders}