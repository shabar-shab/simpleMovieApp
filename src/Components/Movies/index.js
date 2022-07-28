import React from "react";
import MovieCard from "../MovieCard";
import "./index.css";
import Grid from "@mui/material/Grid";

// name, description, cast, similar movies, genre, language

function Movies({ movies }) {
  return (
    <div className="container">
      <div className="movies">
        <Grid container spacing={3} justifyContent="flex-start" display="flex">
          {movies &&
            movies.map((movie) => (
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
