import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  shortCode: String,
  longUrl: String,
});

const Url = mongoose.model("urls", urlSchema);
export default Url;
