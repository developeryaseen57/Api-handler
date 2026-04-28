// routes/logs.js
const express = require('express');
const router = express.Router();
const { clearLogs, getLogs } = require('../controllers/logs');

router.get('/', getLogs);
router.delete('/', clearLogs);

module.exports = { router };