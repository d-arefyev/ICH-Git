import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import magazineRoutes from './routes/magazineRoutes.js';
import articleRoutes from './routes/articleRoutes.js';

// Инициализация переменных окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к базе данных
connectDB();

app.use(express.json());

// Роуты
app.use('/api', magazineRoutes);
app.use('/api', articleRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
