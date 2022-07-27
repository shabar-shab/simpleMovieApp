import React from "react";
import MovieCard from "../MovieCard";
import "./index.css";
import Grid from "@mui/material/Grid";
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
  },
];

function Movies() {
  return (
    <div className="container">
      <div className="movies">
        <Grid container spacing={3} justifyContent="flex-start" display="flex">
          {movies.map((movie) => (
            <Grid item xs={12} sm={5} md={3} xl={2}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Movies;
