
const { saveLogs } = require('./logs');

async function giveError(req, res) {
  throw new Error('Intentional error');
}

async function globalErrorHandler(err, req, res, next) {
  res.locals.error = {
    message: err.message,
    stack: err.stack
  };

  res.status(500).json({ error: err.message });
}

module.exports = { giveError, globalErrorHandler };