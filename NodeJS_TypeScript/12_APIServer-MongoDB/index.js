// import { MongoClient } from "mongodb"; // error using MongoDB
import client from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import AuthRouter from './routes/authRouter.js'
import PostsRouter from './routes/postsRouter.js'
import UserRouter from './routes/userRouter.js'
import ProductRouter from './routes/productRouter.js'

dotenv.config();

const url = process.env.MONGO_DB_URL

// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true }); // устаревший синтаксис
// const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect(url); // connect mobgoose to mongoDB database
        console.log('Соединение успешное')
        app.listen(3005, () => {
            console.log('Сервер запущен')
        })
    } catch (error) {
        console.log('Ошибка при соединении с MongoDB')
        throw error;
    }
}

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/auth', AuthRouter)
app.use('/api/posts', PostsRouter)
app.use('/api/users', UserRouter)
app.use('/api/products', ProductRouter)

connectToDatabase();