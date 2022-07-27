import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField, MenuItem, Button } from "@mui/material";
import { GENRES, LANGUAGES } from "../../Utlis";

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

function AddMovieModal({ isModalOpen, closeModal }) {
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
          />
          <TextField
            variant="outlined"
            label="Cast"
            size="small"
            placeholder="e.g Chris Hemsworth, Natalie Portman"
            style={inputFields}
            multiline
          />
          <TextField
            variant="outlined"
            label="Genre"
            size="small"
            style={inputFields}
            select
            // value={currency}
            // onChange={handleChange}
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
            // onChange={handleChange}
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
          />
          <TextField
            variant="outlined"
            label="Description"
            size="small"
            style={inputFields}
            placeholder="Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace."
            multiline
          />
          <Button varinat ="contained" style={{...inputFields, backgroundColor: "#032541d9",color:"#ffffff"}}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddMovieModal;