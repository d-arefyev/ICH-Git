import { Router, Request, Response } from 'express';
import Product from '../models/Product';

const router: Router = Router();

// Создание продукта
router.post('/products', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, quantity, price } = req.body;
        const product = await Product.create({ name, quantity, price });
        res.status(201).json({ message: 'Продукт создан', product });
    } catch (error) {
        console.error('Ошибка при создании продукта:', error);
        res.status(500).json({ message: 'Ошибка при создании продукта' });
    }
});

// Получение всех продуктов
router.get('/products', async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({ message: 'Ошибка при получении продуктов' });
    }
});

// Получение продукта по ID
router.get('/products/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Продукт не найден' });
            return;
        }
        res.json(product);
    } catch (error) {
        console.error('Ошибка при получении продукта:', error);
        res.status(500).json({ message: 'Ошибка при получении продукта' });
    }
});

// Обновление продукта
router.patch('/products/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(404).json({ message: 'Продукт не найден' });
            return;
        }
        res.json(product);
    } catch (error) {
        console.error('Ошибка при обновлении продукта:', error);
        res.status(500).json({ message: 'Ошибка при обновлении продукта' });
    }
});

// Удаление продукта
router.delete('/products/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Продукт не найден' });
            return;
        }
        res.json({ message: 'Продукт удалён' });
    } catch (error) {
        console.error('Ошибка при удалении продукта:', error);
        res.status(500).json({ message: 'Ошибка при удалении продукта' });
    }
});

export default router;






// import { Router } from "express";
// import Product from '../models/Product.js';

// const router = Router();

// router.post('/products', async (req, res) => {
//   try {
//     const { name, quantity, price } = req.body;
//     const product = await Product.create({
//       name,
//       quantity,
//       price
//     });
//     res.status(201).json({ message: 'Создано', product });
//   } catch (error) {
//     console.log('Что то пошло не так');
//     res.status(500).json({ message: 'Что то пошло не так' });
//   }
// });

// router.get('/products', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log('Что то пошло не так');
//     res.status(500).json({ message: 'Что то пошло не так' });
//   }
// });

// router.get('/products/:id', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log('Что то пошло не так');
//     res.status(500).json({ message: 'Что то пошло не так' });
//   }
// });

// router.patch('/products/:id', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log('Что то пошло не так');
//     res.status(500).json({ message: 'Что то пошло не так' });
//   }
// });

// router.delete('/products/:id', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log('Что то пошло не так');
//     res.status(500).json({ message: 'Что то пошло не так' });
//   }
// });

// export default router;