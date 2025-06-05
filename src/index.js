import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { PORT } from './Config/ServerConfig.js';
import connectDB from './Config/dbConfig.js';
import apiRouter from './router/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({
    msg: 'pong'
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
