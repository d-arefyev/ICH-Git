import express from 'express';
import { Tag } from '../models/Tag.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).send(tag);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
