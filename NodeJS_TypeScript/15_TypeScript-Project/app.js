import express from 'express'
import { config } from 'dotenv';

import connectDB from './db/index.js';
import productRouter from './routes/productRouter.js'

config()

const app = express();

const PORT = process.env.PORT || 3000
app.use(express.json());
connectDB();

app.use('/api', productRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})