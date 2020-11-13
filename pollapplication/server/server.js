import express from 'express';
import morgan from 'morgan';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleWare from './middleware/errors.js';

import connectDatabase from './config/db.js';
import poll from './routes/poll.js';
import user from './routes/user.js';
import answer from './routes/answer.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(`${process.env.BASEURL}/polls`, poll);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/answers`, answer);

app.use(errorMiddleWare);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
