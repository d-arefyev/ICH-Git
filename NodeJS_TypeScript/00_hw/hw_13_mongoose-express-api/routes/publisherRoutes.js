import express from 'express';
import { Publisher } from '../models/Publisher.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.status(201).send(publisher);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.status(200).send(publishers);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
