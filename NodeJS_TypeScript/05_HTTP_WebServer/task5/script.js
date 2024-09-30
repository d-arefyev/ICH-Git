// Импортируем модуль http
import http from 'http';

// Создаем сервер с использованием метода http.createServer()
const server = http.createServer((req, res) => {
    // Читаем заголовок Authorization из объекта запроса
    const authHeader = req.headers['authorization'];

    // Логируем значение заголовка Authorization в консоль
    console.log('Authorization header:', authHeader);

    // Устанавливаем статус ответа 200
    res.statusCode = 200;

    // Устанавливаем заголовок Content-Type в text/plain
    res.setHeader('Content-Type', 'text/plain');

    // Устанавливаем заголовок Cache-Control
    res.setHeader('Cache-Control', 'public, max-age=3600');

    // Отправляем текстовый ответ
    res.end('Authorization header logged, and Cache-Control header set');
});

// Настраиваем сервер на прослушивание порта 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
