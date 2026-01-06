import express from "express";
import Movie from "../models/movieModel.js";

const router = express.Router();

// 🔍 Search movies
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const filter = query
      ? {
          $or: [
            { name: { $regex: query, $options: "i" } },
            { actor: { $regex: query, $options: "i" } },
            { genre: { $regex: query, $options: "i" } },
          ],
        }
      : {};
    const movies = await Movie.find(filter);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ⭐ Add review
router.post("/:id/review", async (req, res) => {
  try {
    const { username, comment, stars } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    movie.reviews.push({ username, comment, stars });
    const total = movie.reviews.reduce((a, r) => a + r.stars, 0);
    movie.rating = total / movie.reviews.length;

    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error adding review" });
  }
});
router.get("/search", async (req, res) => {
  const query = req.query.q || "";
  try {
    const movies = await Movie.find({
      name: { $regex: query, $options: "i" } // case-insensitive search
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error while searching movies" });
  }
});


export default router;
