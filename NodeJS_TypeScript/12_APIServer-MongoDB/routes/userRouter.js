import { Router } from "express";
import { User } from "../models/User.js";

const router = Router();

// Получить всех пользователей
router.get('/', async (req, res) => {
    try {
        const users = await User.find().sort({ name: 1 });
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users: ', error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

// Получить одного пользователя по ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

// Получить одного пользователя по параметрам name и email
router.get('/findone', async (req, res) => {
    try {
        const { name, email } = req.query; // Используйте req.query для поиска по параметрам
        const user = await User.findOne({ name, email });
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

// Полное обновление пользователя (PUT)
// Частичное обновление пользователя (PATCH)
router.patch('/:id', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { email },
            { runValidators: true, new: true } // Опции для валидации и возврата обновленного документа
        );
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

export default router;
