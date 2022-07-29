import React, {useEffect, useState} from "react";
import Layout from "../../Layout";
import { MOVIES } from "../../Utlis";
import Movies from "../../Components/Movies";

function MyFavouriteMovies() {
  const [movies, setMovies] = useState(MOVIES);

  const toggleFavouriteMovie =(index, value)=>{
    const updateMovie = [...movies]
    updateMovie[index] ={...updateMovie[index], favourite: value};
    setMovies([...updateMovie]);
    localStorage.setItem('allMovies',JSON.stringify(updateMovie));  //  no needed simply to persist the data 
  }

  useEffect(()=>{
    const previousMovies = JSON.parse(localStorage.getItem("allMovies"));
    if (previousMovies) {
      setMovies(previousMovies);
    }
  },[]);

  const favMoives = movies.filter(moive =>  moive.favourite)
  return <Layout>My MyFavourite Movies
    <Movies movies={favMoives} toogleFavMovie={toggleFavouriteMovie} />
  </Layout>;
}

export default MyFavouriteMovies;
