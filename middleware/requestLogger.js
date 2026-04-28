const { saveLogs } = require('../controllers/logs');


async function requestLogger(req, res, next) {

  const start = Date.now()
  // save original res.json
  const originalJson = res.json.bind(res)

  // replace it with your own
  res.json = async function (body) {
    const duration = Date.now() - start
    const status = res.statusCode;

    const Log = {
      type: status >= 400 ? 'error' : 'request',
      method: req.method,
      url: req.originalUrl,
      status: status,
      duration: `${duration}ms`,
      requestBody: req.body,
      responseBody: body,
      errorMessage: status >= 400 ? (body.error || body.message || null) : null,
      errorStack: null,
      timestamp: new Date().toISOString()
    }

     await saveLogs(Log);

    return originalJson(body) // still send the real response
  }

  next()
}

module.exports = { requestLogger }