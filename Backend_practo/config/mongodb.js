import mongoose from "mongoose";

const connectDB = async () => {
  // Event listener before connecting
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Database connection error:", err);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

export default connectDB;