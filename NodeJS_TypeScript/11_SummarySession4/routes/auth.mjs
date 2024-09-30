import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDB } from '../db/index.mjs';

const router = express.Router();

// router.post('/register', (req, res) => {
//     res.send('User has registered');
// });

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const db = getDB();
        const user = { username, password: hashedPassword };

        await db.collection('users').insertOne(user);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('username, password', username, password);

    //Проверка наличия пользователя
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const db = getDB();
        const user = await db.collection('users').findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Шаг 4: Проверка пароля
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Шаг 5: Генерация JWT токена
        const token = jwt.sign(
            { userId: user._id, username: user.username },  // Данные, которые будут зашифрованы в токене
            process.env.JWT_SECRET,  // Секретный ключ для подписи токена
            { expiresIn: '1h' }  // Время действия токена
        );

        // Возвращаем токен клиенту
        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;