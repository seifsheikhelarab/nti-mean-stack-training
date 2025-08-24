//Configuration for connecting to MongoDB database

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export default function databaseSetup() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`Connected to MongoDB at ${process.env.MONGO_URI}`))
    .catch((err) => console.error(err));
}
