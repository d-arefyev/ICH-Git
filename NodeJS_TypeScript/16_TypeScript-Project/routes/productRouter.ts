import { Router } from "express";
import Product from "../models/Product";

const router = Router();

router.post("/products", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const product = await Product.create({
      name,
      quantity,
      price,
    });
    res.status(201).json({ message: "Создано", product });
  } catch (error) {
    console.log("Что то пошло не так");
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.get("/products", async (req, res) => {
  try {
  } catch (error) {
    console.log("Что то пошло не так");
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
  } catch (error) {
    console.log("Что то пошло не так");
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.patch("/products/:id", async (req, res) => {
  try {
  } catch (error) {
    console.log("Что то пошло не так");
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
  } catch (error) {
    console.log("Что то пошло не так");
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

export default router;
