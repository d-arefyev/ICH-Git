import express from 'express';
import bodyParser from 'body-parser';
import Book from './models/book.js';

const app = express();
const PORT = 3001;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Корневой маршрут
app.get('/', (req, res) => {
    res.send('Welcome to the Book API!');
});

// Маршрут для получения всех книг
app.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll(); // Извлекаем все книги
        res.json(books); // Отправляем данные в формате JSON
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении списка книг' });
    }
});

// Маршрут для добавления новой книги
app.post('/books', async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const newBook = await Book.create({ title, author, year }); // Создаем новую книгу
        res.status(201).json(newBook); // Отправляем созданную запись в ответе
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при создании книги' });
    }
});

// Маршрут для обновления книги по ID
app.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, year } = req.body;
        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }

        // Обновляем книгу
        book.title = title;
        book.author = author;
        book.year = year;
        await book.save();

        res.json(book); // Отправляем обновленную книгу
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при обновлении книги' });
    }
});

// Маршрут для удаления книги по ID
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }

        // Удаляем книгу
        await book.destroy();
        res.json({ message: 'Книга успешно удалена' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при удалении книги' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
