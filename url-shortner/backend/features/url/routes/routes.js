import { Router } from "express";
import {
  generateShortUrl,
  getAllRoutes,
  redirectController,
} from "../controller/contoller.js";
import { isAuthenticated } from "../../../shared/middleware/checkAuth.js";

export const urlRoutes = Router();

urlRoutes.post("/shorten", isAuthenticated, generateShortUrl);
urlRoutes.get("/:shortId", redirectController);
urlRoutes.get("/my/urls", isAuthenticated, getAllRoutes);
