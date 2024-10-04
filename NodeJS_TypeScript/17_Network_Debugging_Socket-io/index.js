import express from 'express'; // Импортируем express
import { Server } from 'socket.io'; // Импортируем Socket.io сервер
import http from 'http'; // Импортируем http-модуль для создания сервера
import cors from 'cors'; // Импортируем cors для настройки CORS-политики

const app = express(); // Создаем экземпляр приложения express

// Настройка CORS, чтобы сервер принимал запросы с любых источников
app.use(
  cors({
    origin: '*', // Разрешаем все источники
    methods: ['GET', 'POST'], // Разрешаем методы GET и POST
    allowedHeaders: ['Content-Type'], // Разрешаем заголовок Content-Type
  })
);

// Настраиваем директорию для статических файлов (например, HTML, CSS, JS)
// Убедитесь, что файлы лежат в папке 'public' (например, index.html)
app.use(express.static('public'));

// Создаем HTTP сервер на базе express-приложения
const server = http.createServer(app);

// Создаем Socket.io сервер и привязываем его к нашему HTTP серверу
const io = new Server(server, {
  cors: {
    origin: '*', // Разрешаем подключение с любых источников
    methods: ['GET', 'POST'], // Разрешаем методы GET и POST
  },
});

// Обработка событий Socket.io
io.on('connection', (socket) => {
  console.log('Connected!'); // Логируем событие подключения

  // Обработчик для получения сообщений от клиентов
  socket.on('message', (msg) => {
    console.log('Message: ' + msg); // Логируем полученное сообщение
    io.emit('message', msg); // Рассылаем сообщение всем подключенным клиентам
  });

  // Обработчик события отключения клиента
  socket.on('disconnect', () => {
    console.log('A user disconnected'); // Логируем отключение клиента
  });
});

// Запуск HTTP сервера на порту 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
