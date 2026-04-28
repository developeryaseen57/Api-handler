
const { saveLogs } = require('./logs');

async function giveError(req, res) {
  throw new Error('Intentional error');
}

async function globalErrorHandler(err, req, res, next) {
  const snapshot = {
    type: 'error',
    method: req.method,
    url: req.originalUrl,
    status: 500,
    duration: 'N/A',
    requestBody: req.body || {},
    responseBody: { error: err.message },
    errorMessage: err.message,
    errorStack: err.stack,
    timestamp: new Date().toISOString()
  }
  await saveLogs(snapshot);
  res.status(500).json({ error: err.message });
}

module.exports = { giveError, globalErrorHandler };