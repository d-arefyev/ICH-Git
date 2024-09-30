import { Router } from 'express'
import { Product } from '../models/Product.js';

const router = Router();

// Create
router.post('/create', async (req, res) => {
    try {
        const { name, price, consumer } = req.body
        const product = await Product.create({ name, price, consumer }, (error, product) => {
            if (error) {
                console.log(error)
            } else {
                console.log(product)
            }
        })
        res.status(201).json({ message: 'Созданно', product })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Что то пошло не так' })
    }
})
// Read
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Что то пошло не так' })
    }
})
// Update
router.patch('/', async (req, res) => {
    try {
        const { id, name, price, description } = req.body
        const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true })
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' })
        }
        res.status(200).json({ message: 'Обновленно', product })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Что то пошло не так' })
    }
})
// Delete
//              id из params
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const product = await Product.findOneAndDelete(id, (error, product) => {
            if (error) {
                console.log(error)
            } else {
                console.log(product)
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Что то пошло не так' })
    }
})

export default router;