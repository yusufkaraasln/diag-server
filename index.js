import express from 'express';
import dotenv from 'dotenv';
import Mongo from './config/db.js';
import cors from 'cors';
import Routes from './routes/auth.js';
import UserConfRoutes from './routes/userConfiguration.js';
dotenv.config();

cors();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Routes);
app.use('/api', UserConfRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
  Mongo.connect();
});
