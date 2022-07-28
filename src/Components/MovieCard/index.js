import React from "react";
import { Typography } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.img} alt ="" />
      <Typography>{movie.name}</Typography>
      <FavoriteOutlinedIcon color="#ffffff"/>
    </div>
  );
}

export default  MovieCard;

