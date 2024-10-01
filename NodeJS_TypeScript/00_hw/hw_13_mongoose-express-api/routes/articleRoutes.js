import express from 'express';
import Article from '../models/Article.js';
import Tag from '../models/Tag.js';

const router = express.Router();

// Создание новой статьи
router.post('/articles', async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Создание нового тега
router.post('/tags', async (req, res) => {
    try {
        const tag = new Tag(req.body);
        await tag.save();
        res.status(201).json(tag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Получение всех статей с их тегами
router.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find().populate('tags');
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
