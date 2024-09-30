import { createServer } from 'http'
import { readFile, writeFile, appendFile } from 'fs'
import events from 'events'
import path from 'path'
import url from 'url'
import express from 'express'
import cors from 'cors'

// NodeJS
// const server = createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', "text/plain");
//     response.setHeader("Access-Control-Allow-Origin", "*")
//     response.end('Some Text');
// })

// server.listen(5500, '127.0.0.1', () => {
//     console.log(`Server works on http://127.0.0.1:5500`)
// })

// EXPRESS
// Создаем express приложение
const server = express();
// Разрешаем CORS для всех https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
server.use(cors());

server.get('/', (request, response) => {
    const p = path.resolve('users.txt');
    // __dirname
    const readedFile = readFile('./database/users.json', 'utf-8', (error, data) => {
        if (error) {
            return response.status(500).json({ error: 'Error reading file' })
        }
        try {
            const parsedData = JSON.parse(data);
            // Search Login in JSON dataBase
            console.log(data);
            response.status(200).json(parsedData)
        } catch (e) {
            response.status(500).json({ error: 'Error parsing file' });
        }
    })
});

server.get('/about', (request, responce) => {
    responce.send('send about');
})

// const PORT = env.PORT || 5500
const PORT = 5500 || env.PORT
server.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}/`);
})

// .env credentials Environment