import express from 'express';
import Publisher from '../models/Publisher.js';
import Magazine from '../models/Magazine.js';

const router = express.Router();

// Создание нового издателя
router.post('/publishers', async (req, res) => {
    try {
        const publisher = new Publisher(req.body);
        await publisher.save();
        res.status(201).json(publisher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Создание нового журнала
router.post('/magazines', async (req, res) => {
    try {
        const magazine = new Magazine(req.body);
        await magazine.save();
        res.status(201).json(magazine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Получение всех журналов с их издателями
router.get('/magazines', async (req, res) => {
    try {
        const magazines = await Magazine.find().populate('publisher');
        res.status(200).json(magazines);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
