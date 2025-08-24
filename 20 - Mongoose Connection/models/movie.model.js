import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  cast: { type: [String], required: true },
  genres: { type: [String], required: true },
  extract: { type: String, required: true },
  thumbnail: { type: String, required: true },
  thumbnail_width: { type: Number, required: true },
  thumbnail_height: { type: Number, required: true },
});

export let getMovies = async function () {
  let movies = await Movie.find().sort({ year: -1 }).limit(20);
  return movies;
};

export let findMovies = async function (query) {
  let movies = await Movie.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { cast: { $regex: query, $options: "i" } },
    ],
  });
  return movies;
};

export const Movie = mongoose.model("Movie", movieSchema);
