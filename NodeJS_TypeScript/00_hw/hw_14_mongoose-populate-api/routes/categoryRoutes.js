import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

// Создание категории
router.post('/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
