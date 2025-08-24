import express from "express";

import { indexController, searchController } from "./controllers/movie.controller.js";

export const router = express.Router();

router.get("/", indexController);
router.get("/search", searchController);