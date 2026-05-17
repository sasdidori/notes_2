import dotenv from 'dotenv';
import app from './app.js';
import mongoose from 'mongoose';

dotenv.config({ path: './.env' });

try {
  mongoose.connect(process.env.DB_URI);
  console.log('connected to mongodb ');

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port:${process.env.PORT}`);
  });
} catch (error) {
  console.log('mongodb connection failed');
  process.exit(1);
}
