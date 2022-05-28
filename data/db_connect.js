import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// connects to the database
const connectDB = await mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("Connected to the database successfully")
  });

export default connectDB;
