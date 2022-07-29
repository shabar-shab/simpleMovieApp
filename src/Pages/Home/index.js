import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Movies from "../../Components/Movies";
import FloatingActionButton from "../../Components/FloatingButton";
import AddMovieModal from "../../Components/AddMovieModal";
import { MOVIES } from "../../Utlis";
import "./index.css";

function Home() {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState(MOVIES);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addMoive = (newMoive) => {
    setMovies([...movies, newMoive]);
  };

  const toggleFavouriteMovie =(index, value)=>{
    const updateMovie = [...movies]
    updateMovie[index] ={...updateMovie[index], favourite: value};
    setMovies([...updateMovie]);
    localStorage.setItem('allMovies',JSON.stringify(updateMovie));  //  no needed simply to persist the data 
  }

  useEffect(() => {
    // reterive data on page refresh
    const previousMovies = JSON.parse(localStorage.getItem("allMovies"));
    if (previousMovies) {
      setMovies(previousMovies);
    }
  }, []);
  return (
    <Layout>
      <Movies movies={movies}  toogleFavMovie ={toggleFavouriteMovie}/>
      <div className="add-button">
        <FloatingActionButton openModal={handleOpen} />
      </div>
      <AddMovieModal
        isModalOpen={open}
        closeModal={handleClose}
        addMovie={addMoive}
        movies={movies}
      />
    </Layout>
  );
}

export default Home;
