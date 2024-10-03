import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.DB_MONGO as string);
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Завершаем процесс в случае ошибки
    }
};

export default connectDB;



// import mongoose from 'mongoose'

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB_MONGO)
//         console.log('Connecting success')
//     } catch (error) {
//         console.log('Error ' + error.message);
//         process.exit(1);
//     }
// }
// export default connectDB

