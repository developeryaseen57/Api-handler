const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();


app.use(express.json());

const authRouter = require('./routes/auth');
const errorRouter = require('./routes/error');
const orderRouter = require('./routes/order');
const slowReqRouter = require('./routes/slowReq');
const userRouter = require('./routes/user');

app.use('/auth', authRouter.router);
app.use('/error', errorRouter.router);
app.use('/orders', orderRouter.router);
app.use('/slow', slowReqRouter.router);
app.use('/users', userRouter.router);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});