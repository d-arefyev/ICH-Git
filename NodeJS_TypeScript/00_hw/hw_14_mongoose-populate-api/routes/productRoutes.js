import express from 'express';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

const router = express.Router();

// Создание продукта
router.post('/products', async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    
    const newProduct = new Product({ name, price, category: categoryId });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Получение продуктов с популяцией категорий
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
