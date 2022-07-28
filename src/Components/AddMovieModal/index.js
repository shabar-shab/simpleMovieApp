import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField, MenuItem, Button } from "@mui/material";
import { GENRES, LANGUAGES } from "../../Utlis";
const IMAGES = process.env.PUBLIC_URL;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const inputFields = {
  width: "100%",
  marginTop: "1rem",
};

function AddMovieModal({ isModalOpen, closeModal, addMovie, movies }) {
  const [movieDetails, SetMovieDetails] = useState({
    name: "",
    cast: "",
    genre: "",
    language: "",
    similarMovie: "",
    desc: "",
  });

  const handleChange = (e, fieldName) => {
    SetMovieDetails({
      ...movieDetails,
      [fieldName]: e.target.value,
      img: `${IMAGES}/movieImages/thor.jpg`,
    });
  };

  console.log("movie detials", movieDetails);
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Movie
          </Typography>
          <TextField
            variant="outlined"
            label="Name of Movie"
            size="small"
            style={inputFields}
            onChange={(e) => handleChange(e, "name")}
          />
          <TextField
            variant="outlined"
            label="Cast"
            size="small"
            placeholder="e.g Chris Hemsworth, Natalie Portman"
            style={inputFields}
            onChange={(e) => handleChange(e, "cast")}
          />
          <TextField
            variant="outlined"
            label="Genre"
            size="small"
            style={inputFields}
            select
            // value={currency}
            onChange={(e) => handleChange(e, "genre")}
          >
            {GENRES.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Languages"
            size="small"
            style={inputFields}
            select
            // value={currency}
            onChange={(e) => handleChange(e, "language")}
          >
            {LANGUAGES.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Similar Movies"
            size="small"
            placeholder="e.g God of Thunder, Doctor Strange"
            style={inputFields}
            onChange={(e) => handleChange(e, "similarMovie")}
          />
          <TextField
            variant="outlined"
            label="Description"
            size="small"
            style={inputFields}
            placeholder="Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace."
            multiline
            onChange={(e) => handleChange(e, "desc")}
          />
          <Button
            varinat="contained"
            style={{
              ...inputFields,
              backgroundColor: "#032541d9",
              color: "#ffffff",
            }}
            onClick={() => {
              localStorage.setItem("moive", JSON.stringify(movieDetails));
              addMovie(movieDetails);
              localStorage.setItem(
                "allMovies",
                JSON.stringify([...movies, movieDetails]) // to persist data for page refresh
              );
              closeModal();
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddMovieModal;
