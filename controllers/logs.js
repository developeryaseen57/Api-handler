
const Log = require('../models/logs');

async function saveLogs(snapshot) {
  try {
    await Log.create(snapshot);
  } catch (error) {
    console.error('Error saving log snapshot:', error);
  }
}

async function getLogs(req, res) {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).limit(100);
    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


async function clearLogs(req, res) {
  try {
    await Log.deleteMany({});
    return res.status(200).json({ message: 'Logs cleared' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


module.exports = { clearLogs, getLogs, saveLogs };