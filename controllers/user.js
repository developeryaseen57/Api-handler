const { users } = require('../helper/data');

async function getAllUsers(req, res) {
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


async function getUser(req, res) {
  try {
    const { id } = req.params;
    const user = users.find(user => user.id === Number(id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
   return res.status(200).json(user);
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
}
module.exports = { getAllUsers, getUser}
