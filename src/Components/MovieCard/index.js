import React from "react";
import { Typography } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./index.css";
import Tooltip from "@mui/material/Tooltip";
function MovieCard({ movie, index, toogleFavMovie}) {
  return (
    <div>
      <img src={movie.img} alt="" />
      <div className="movie-info">
        <Typography>{movie.name}</Typography>
        {movie.favourite ? (
          <Tooltip title="Remove from Favourite" placement="top-start" >
            <FavoriteOutlinedIcon style={{ color: "red" }} onClick={()=>{toogleFavMovie(index,!movie.favourite); console.log('icons clicked')}} />
          </Tooltip>
        ) : (
          <Tooltip title="Add to Favourite" placement="top-start">
            <FavoriteBorderOutlinedIcon onClick={()=>{toogleFavMovie(index,!movie.favourite); console.log('icons clicked')}}/>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
