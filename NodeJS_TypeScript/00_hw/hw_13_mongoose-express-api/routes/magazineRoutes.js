import express from 'express';
import { Magazine } from '../models/Magazine.js';
import { Publisher } from '../models/Publisher.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { title, issueNumber, publisher: publisherName } = req.body;

    // Поиск издателя по имени
    const publisher = await Publisher.findOne({ name: publisherName });
    if (!publisher) {
      return res.status(400).send({ message: 'Издатель не найден' });
    }

    // Создание нового журнала с ID найденного издателя
    const magazine = new Magazine({ title, issueNumber, publisher: publisher._id });
    await magazine.save();
    res.status(201).send(magazine);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Получение всех журналов с заполнением информации об издателе
router.get('/', async (req, res) => {
  try {
    const magazines = await Magazine.find().populate('publisher');
    res.status(200).send(magazines);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
