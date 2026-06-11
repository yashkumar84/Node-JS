import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected Successsfully"))
    .catch((err) => console.log("Error", err));
}
