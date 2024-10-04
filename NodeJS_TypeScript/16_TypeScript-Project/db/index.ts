import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO!);
    console.log("Connecting success");
  } catch (error: any) {
    console.log("Error " + error.message);
    process.exit(1);
  }
};
export default connectDB;
