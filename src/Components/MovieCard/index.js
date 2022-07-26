import React from "react";
function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.img} alt ="" />
      <p>{movie.name}</p>
    </div>
  );
}

export default  MovieCard;

