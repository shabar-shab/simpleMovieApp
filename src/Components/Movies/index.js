import React from "react";
import MovieCard from "../MovieCard";
import './index.css'
const IMAGES = process.env.PUBLIC_URL;

// name, description, cast, similar movies, genre, language
const movies = [
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  },
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  },
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  },
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  },
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  },
  {
    name: "Love and Thundar",
    dec: "avengers Movies",
    img: `${IMAGES}/movieImages/thor.jpg`,
    languages: ["English", "Hindi"],
    cast: ["Chris hemis worth", "shabir"],
    genre: "Comdey",
  }
];

function Movies() {
  return (
    <div className="container">
        The Moive list 
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
