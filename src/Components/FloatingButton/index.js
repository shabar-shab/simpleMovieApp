import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

function FloatingActionButton({addMovie}) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add"  onClick={()=>addMovie()}>
        <Tooltip title= "Add a New Movie" placement="left-start" >
          <AddIcon />
        </Tooltip>
      </Fab>
    </Box>
  );
}

export default FloatingActionButton;
