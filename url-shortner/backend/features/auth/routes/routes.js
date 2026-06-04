import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controller/controller.js";

export const authRoutes = Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
