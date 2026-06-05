import { Router } from "express";
import {
  generateShortUrl,
  redirectController,
} from "../controller/contoller.js";

export const urlRoutes = Router();

urlRoutes.post("/shorten", generateShortUrl);
urlRoutes.get("/:shortId", redirectController);
