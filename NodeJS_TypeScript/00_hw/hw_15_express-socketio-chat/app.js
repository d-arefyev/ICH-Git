import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Настройка Express для обслуживания статических файлов
// Указываем относительный путь к папке 'public'
app.use(express.static('public'));

// Обработка события подключения пользователей
io.on('connection', (socket) => {
    console.log('Новый пользователь подключился');

    // Обработка получения сообщения от клиента
    socket.on('chat message', (msg) => {
        console.log('Сообщение: ' + msg);
        // Отправляем сообщение обратно всем клиентам
        io.emit('chat message', msg);
    });

    // Обработка отключения пользователя
    socket.on('disconnect', () => {
        console.log('Пользователь отключился');
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер работает на порту ${PORT}`);
});
