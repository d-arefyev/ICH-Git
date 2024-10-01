import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Подключаем маршруты
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

// Подключение к MongoDB
const startServer = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
  