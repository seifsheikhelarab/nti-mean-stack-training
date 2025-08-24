import dotenv from "dotenv";
dotenv.config();

import express from "express";

import databaseSetup from "./config/database.config.js";

import { router } from "./routes.js";

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

databaseSetup();

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App Started on http://localhost:${port}`));
