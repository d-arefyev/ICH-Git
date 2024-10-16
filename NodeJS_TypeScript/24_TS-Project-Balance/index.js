import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./db/index.js";
import UserRouter from './routes/userRouter.js'
import BalanceRouter from './routes/balanceRouter.js'
import AuthRouter from './routes/authRoter.js'

const app = express();
app.use(cors());
app.use(express.json())
app.use('/', UserRouter);
app.use('/', BalanceRouter)
app.use('/', AuthRouter)
// app.get('/', (req, res) => {
//     res.send('Работает')
// })

const start = () => {
    connectDB();
    app.listen(3000, () => {
        console.log('Сервер запущен')
    })
}
start();
