import React, { useState } from "react";

const ReviewSection = ({ movieId }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = async () => {
    await fetch(`http://localhost:5000/api/movies/${movieId}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, comment, stars }),
    });
    alert("Review added!");
    setUsername("");
    setComment("");
    setStars(0);
  };

  return (
    <div className="p-4 border-t mt-4">
      <h3 className="font-bold mb-2">Add Review</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      ></textarea>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Stars (1–5)"
        value={stars}
        onChange={(e) => setStars(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewSection;
