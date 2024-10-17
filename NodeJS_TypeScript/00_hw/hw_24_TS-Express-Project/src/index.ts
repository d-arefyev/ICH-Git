import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware для обработки JSON данных
app.use(express.json());

// GET маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is a GET request!');
});

// POST маршрут
app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({
    message: 'Data received',
    receivedData: data
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
