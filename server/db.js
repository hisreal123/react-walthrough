import mongoose from "mongoose";

const uri =
  "mongodb+srv://blog:XreRHy0Ja3FC05Hw@cluster0.z2ujdbw.mongodb.net/dbName";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected !!");
  } catch (error) {
    console.error("Not connected to DB !!", error);
    throw error;
  }
};
