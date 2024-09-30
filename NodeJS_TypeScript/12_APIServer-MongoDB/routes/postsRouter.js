import { Router } from "express";
import { Post } from "../models/Post.js";

const router = Router();

// Создание поста
router.post('/create', async (req, res) => {
    try {
        const { userId, post } = req.body;
        
        // Создание нового поста с userId и содержимым post
        const newPost = await Post.create({
            userId, 
            post
        });

        res.status(201).json({ message: 'Пост создан', post: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так, пост не был создан' });
    }
});

// Получить все посты
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

// Получить пост по ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Пост не найден' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
});

export default router;
