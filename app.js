const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const { requestLogger } = require('./middleware/requestLogger');
const { globalErrorHandler } = require('./controllers/error');

const authRouter = require('./routes/auth');
const errorRouter = require('./routes/error');
const orderRouter = require('./routes/order');
const slowReqRouter = require('./routes/slowReq');
const userRouter = require('./routes/user');
const logsRouter = require('./routes/logs');

app.use(requestLogger);

app.get('/viewer', (req, res) => {
  res.sendFile(path.join(__dirname, 'viewer/index.html'));
});

app.use('/auth', authRouter.router);
app.use('/error', errorRouter.router);
app.use('/orders', orderRouter.router);
app.use('/slow', slowReqRouter.router);
app.use('/users', userRouter.router);
app.use('/logs', logsRouter.router);

app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});