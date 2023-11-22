import express from 'express';
import dotenv from 'dotenv';
import Mongo from './config/db.js';
import cors from 'cors';
import AuthRoutes from './routes/auth.js';
import UserConfRoutes from './routes/userConfiguration.js';
import UserDetailsRoutes from './routes/userDetails.js';
import UserSettingsRoute from './routes/userSettings.js';

dotenv.config();

cors();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', AuthRoutes);
app.use('/api', UserConfRoutes);
app.use('/api', UserDetailsRoutes);
app.use('/api', UserSettingsRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
  Mongo.connect();
});
