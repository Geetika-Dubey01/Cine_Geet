import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: String,
  actor: String,
  genre: String,
  description: String,
  image: String,
  rating: { type: Number, default: 0 },
  reviews: [
    { username: String, comment: String, stars: Number },
  ],
});

export default mongoose.model("Movie", movieSchema);
