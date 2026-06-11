import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    user_id: String,
    email: String,
    password: String,
    name: String,
  },
  { timestamps: true },
);

const User = mongoose.model("users", userSchema);
export default User;
