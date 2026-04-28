const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  type:         { type: String, enum: ['request', 'error'], required: true },
  method:       { type: String, required: true },
  url:          { type: String, required: true },
  status:       { type: Number, required: true },
  duration:     { type: String, default: 'N/A' },
  requestBody:  { type: mongoose.Schema.Types.Mixed, default: {} },
  responseBody: { type: mongoose.Schema.Types.Mixed, default: {} },
  errorMessage: { type: String, default: null },
  errorStack:   { type: String, default: null },
  timestamp:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);