import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index";
import UserRouter from "./routes/userRouter";
import BalanceRouter from "./routes/balanceRouter";
import AuthRouter from "./routes/authRoter";
import PostRouter from "./routes/postRouter";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/", UserRouter);
app.use("/", BalanceRouter);
app.use("/", AuthRouter);
app.use("/", PostRouter);
// app.get('/', (req, res) => {
//     res.send('Работает')
// })

const start = () => {
  connectDB();
  app.listen(3000, () => {
    console.log("Сервер запущен");
  });
};
start();
