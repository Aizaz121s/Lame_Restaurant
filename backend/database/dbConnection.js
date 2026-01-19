import mongoose from "mongoose";

export const dbConnection = async () => {
  // If already connected, don't try to connect again
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.log(`Some error occurred while connecting to database: ${err}`);
    throw err; // Throwing the error helps Vercel logs show what happened
  }
};