import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/index.mjs';

import authRouter from './routes/auth.mjs';  // Импортируем маршрутизатор auth
import postsRouter from './routes/posts.mjs';  // Импортируем маршрутизатор posts

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Подключаем маршрутизаторы
app.use('/auth', authRouter);  // Все маршруты auth.js будут доступны по адресу /auth
app.use('/posts', postsRouter);  // Все маршруты posts.js будут доступны по адресу /posts

app.get('/', (req, res) => {
    res.send('Hello, Express');
});

// Подключение к MongoDB
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to start server', error);
});