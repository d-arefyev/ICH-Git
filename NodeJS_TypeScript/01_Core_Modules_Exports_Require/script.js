// Imports
const http = require('http');

// Создание nodeJs сервера
const server = http.createServer((request, responce) => {
   // Установить статус ответа
   responce.statusCode = 200;
   // Устанавливаем headers (мета-информация)
   responce.setHeader('Content-Type', 'text/plain');
   // Устанавливаем тело ответа
   responce.end('Privet node Js, Hello World!');
})

// Установка прослушки
server.listen(5500, '127.0.0.1', () => {
   console.log('Сервер запущен на http://127.0.0.1:5500')
});