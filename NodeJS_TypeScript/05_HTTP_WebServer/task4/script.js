import http from 'http'

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    // Приложение на реакт отправляет запрос на бекенд
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.setHeader('Content-Type', 'text/plain');
    res.end('Cors enabled');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Port listen on http://127.0.0.1:3000');
});
