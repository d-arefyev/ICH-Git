import { Router } from "express";
import User from "../models/User";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const user = await User.create({
      idUser: "Admin",
      initalBalance: 0,
      currentBalance: 0,
    });
    console.log("Пользователь создан");
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Что то пошло не так");
  }
});

router.get("/get-balance/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findById(id)
    const user = (await User.findOne({ idUser: id })) ?? { currentBalance: 0 };
    res.status(200).json({ currentBalance: user.currentBalance });
  } catch (error) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

export default router;
