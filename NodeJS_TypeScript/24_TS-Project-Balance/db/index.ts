import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_DB_URI ?? "";

export default async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connection success");
  } catch (error) {
    console.log("Error connection to MongoDB");
    process.exit(1);
  }
}
