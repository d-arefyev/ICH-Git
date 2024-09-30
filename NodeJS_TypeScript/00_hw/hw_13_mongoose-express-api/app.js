import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import publisherRoutes from './routes/publisherRoutes.js';
import magazineRoutes from './routes/magazineRoutes.js';
import tagRoutes from './routes/tagRoutes.js';
import articleRoutes from './routes/articleRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Простые маршруты
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Подключение маршрутов
app.use('/publishers', publisherRoutes);
app.use('/magazines', magazineRoutes);
app.use('/tags', tagRoutes);
app.use('/articles', articleRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
