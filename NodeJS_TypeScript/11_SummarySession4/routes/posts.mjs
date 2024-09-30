import express from 'express';
import authenticateToken from '../middleware/authMiddleware.mjs';
import { getDB } from '../db/index.mjs';

const router = express.Router();

// Защищенный маршрут для создания поста
router.post('/', authenticateToken, async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    try {
        const db = getDB();
        const newPost = {
            title,
            content,
            author: req.user.username,
            createdAt: new Date(),
        };

        const result = await db.collection('posts').insertOne(newPost);
        res.status(201).json({ ...newPost, _id: result.insertedId });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Маршрут для получения всех постов
router.get('/', async (req, res) => {
    try {
        const db = getDB();
        const posts = await db.collection('posts').find().toArray();
        res.json(posts);
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;