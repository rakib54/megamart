import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(String(process.env.MONGO_URI));

    return connection;
  } catch (error) {
    throw error
  }
}