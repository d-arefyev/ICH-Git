import express from 'express';
import dotenv from 'dotenv';
import { connectDB, getDB } from './db/index.js'; // Импорт подключения к MongoDB
import { ObjectId } from 'mongodb'; // Для работы с MongoDB ObjectId

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// POST /products - создание нового продукта
app.post('/products', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }

        const product = { name, price, description };
        const db = getDB();
        const result = await db.collection('products').insertOne(product);
        
        // Получаем созданный продукт и добавляем его ID
        const createdProduct = { _id: result.insertedId, ...product };
        
        res.status(201).json(createdProduct); // Возвращаем созданный продукт
    } catch (error) {
        console.error(error); // Выводим ошибку в консоль для отладки
        res.status(500).json({ message: 'Ошибка при создании продукта', error: error.message });
    }
});

// GET /products - получение всех продуктов
app.get('/products', async (req, res) => {
    try {
        const db = getDB();
        const products = await db.collection('products').find().toArray();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении продуктов', error });
    }
});

// GET /products/:id - получение продукта по ID
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = getDB();
        const product = await db.collection('products').findOne({ _id: new ObjectId(id) });

        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении продукта', error });
    }
});

// PUT /products/:id - обновление продукта по ID
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;

        if (!name || !price || !description) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }

        const db = getDB();
        const updatedProduct = { name, price, description };
        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedProduct }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }

        res.status(200).json({ message: 'Продукт успешно обновлен' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при обновлении продукта', error });
    }
});

// DELETE /products/:id - удаление продукта по ID
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = getDB();
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }

        res.status(200).json({ message: 'Продукт успешно удален' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при удалении продукта', error });
    }
});

// Подключение к MongoDB и запуск сервера
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to start server', error);
});
