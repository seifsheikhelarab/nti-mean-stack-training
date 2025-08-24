import express from "express";
import { Movie, getMovies, findMovies } from "../models/movie.model.js";

export async function indexController(req, res) {
  let movies = await getMovies();
  res.render("index", { movies });
}

export async function searchController(req, res) {
  let query = req.query.term;

  if (!query) {
    return res.redirect("/");
  }

  let movies = await findMovies(query);

  res.render("index", { movies });
}
