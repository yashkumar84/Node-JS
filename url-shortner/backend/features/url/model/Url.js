import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  shortCode: String,
  longUrl: String,
  email: String,
});

const Url = mongoose.model("urls", urlSchema);
export default Url;
