import { Router } from "express";
import User from "../models/User";
import Transaction from "../models/Transaction";

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const { idUser } = req.query;
    // const transactions = await Transaction.find({})
    const user = await User.findOne({ idUser });
    const transactions = user?.transactions;
    res.status(200).json(transactions);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post("/set-balance", async (req, res) => {
  try {
    const { idUser } = req.body;
    // TO-DO User -> Schema & Model
  } catch (error) {}
});

// Входящие транзакции
router.post("/add", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const transaction = await Transaction.create({
      type: "income",
      amount,
    });
    const user = await User.findOneAndUpdate(
      { idUser: userId },
      {
        $push: { transactions: transaction },
        $inc: { currentBalance: transaction.amount },
      },
      { new: true }
    );
    res.status(201).json({ message: "Income transaction created" });
  } catch (error: any) {
    console.log(error.message);
  }
});

// Исходящие транзакции
router.post("/remove", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const transaction = await Transaction.create({
      type: "expense",
      amount,
    });
    const user = await User.findOneAndUpdate(
      { idUser: userId },
      {
        $push: { transactions: transaction },
        $inc: { currentBalance: -transaction.amount },
      },
      { new: true }
    );
    res.status(201).json({ message: "Exprense transaction created" });
  } catch (error: any) {
    console.log("Что то пошло не так...");
    res.status(500).json({ message: error.message });
  }
});

// Передать баланс другому пользователю
router.post("/transfer", async (req, res) => {
  try {
    const { sendId, getId, amount } = req.body;
    const transaction = Transaction.create();
  } catch (error: any) {
    console.log("Что то пошло не так...");
    res.status(500).json({ message: error.message });
  }
});

export default router;
