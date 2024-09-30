import express from 'express';
import { Article } from '../models/Article.js';
import { Tag } from '../models/Tag.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const article = new Article({ title, content });
    await article.save();

    // Обновляем теги
    if (tags && tags.length > 0) {
      const tagUpdates = await Tag.updateMany(
        { _id: { $in: tags } },
        { $addToSet: { articles: article._id } }
      );
    }

    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().populate('tags');
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
