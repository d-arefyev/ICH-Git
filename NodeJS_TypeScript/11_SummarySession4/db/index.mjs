import { MongoClient } from 'mongodb';  // Импортируем MongoClient из библиотеки mongodb
import dotenv from 'dotenv';  // Импортируем dotenv для загрузки переменных окружения

dotenv.config();  // Загружаем переменные окружения из .env файла

const uri = process.env.MONGODB_URI;  // Получаем строку подключения из переменных окружения

const client = new MongoClient(uri, {});

let db;

export async function connectDB() {
    try {
        await client.connect();  // Подключаемся к серверу MongoDB
        db = client.db();  // Получаем объект базы данных
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

export function getDB() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;  // Возвращаем объект базы данных для использования в других частях приложения
}