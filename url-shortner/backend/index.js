//MVC Architecture
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./shared/routes/route.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App is Successfully Running at PORT ${port}`);
});
