import { Router } from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

// Регистрация пользователя
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Проверка на существование пользователя
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь уже существует' });
        }

        // Хеширование пароля
        const hashedPassword = await bcrypt.hash(password, 12);

        // Создание нового пользователя
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Генерация токена
        const token = jwt.sign(
            { userId: newUser._id }, // Использование _id для генерации токена
            'secretic',
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: 'Пользователь создан', token });

    } catch (error) {
        console.error('Ошибка при регистрации пользователя:', error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

// Логин пользователя
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Поиск пользователя по email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' });
        }

        // Сравнение пароля
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль' });
        }

        // Генерация токена
        const token = jwt.sign(
            { userId: user._id }, // Использование _id для генерации токена
            'secretic',
            { expiresIn: '1h' }
        );

        res.json({ token, userId: user._id });

    } catch (error) {
        console.error('Ошибка при логине пользователя:', error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

export default router;
