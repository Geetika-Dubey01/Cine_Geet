import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";

const MovieDetails = () => {
  const { id } = useParams(); // URL se movie id milegi
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:5000/api/movies/search?query=${id}`);
      const data = await res.json();
      setMovie(data[0]);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <img src={movie.image} alt={movie.name} className="w-1/3 rounded" />
      <h1 className="text-2xl font-bold mt-3">{movie.name}</h1>
      <p>{movie.description}</p>
      <p className="text-gray-600">Genre: {movie.genre}</p>
      <p>⭐ Rating: {movie.rating.toFixed(1)}</p>

      {/* ✅ yahan add karo ReviewSection */}
      <ReviewSection movieId={movie._id} />
    </div>
  );
};

export default MovieDetails;
