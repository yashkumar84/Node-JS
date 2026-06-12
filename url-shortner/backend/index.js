//MVC Architecture
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./shared/routes/route.js";
import { urlRoutes } from "./features/url/routes/routes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);

app.listen(port, () => {
  console.log(`App is Successfully Running at PORT ${port}`);
});
