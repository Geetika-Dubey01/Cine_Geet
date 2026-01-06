import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`f-${i}`}>★</span>
        ))}
      {halfStar && <span>☆</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`e-${i}`}>☆</span>
        ))}
      <span className="text-gray-600 ml-2 text-sm">
        ({rating.toFixed(1)}/5)
      </span>
    </div>
  );
};

export default StarRating;
