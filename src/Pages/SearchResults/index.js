import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import MovieCard from "../../Components/MovieCard";
import { MOVIES } from "../../Utlis";
import Movies from "../../Components/Movies";
import { useLocation } from "react-router";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchKeyword, setSearchKeyWord] = useState(
    queryParams.get("q") ?? ""
  );

  const [movies, setMovies] = useState(MOVIES);
  useEffect(() => {
    setSearchKeyWord(queryParams.get("q") ?? "");
    const preMovies = JSON.parse(localStorage.getItem("allMovies"));
    if (preMovies) {
      setMovies(preMovies);
    }
  }, [queryParams.get("q")]);

  const filteredMovies = movies.filter((movie) => {
    if (
      movie.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      movie.genre.includes(searchKeyword)
    ) {
      console.log("found", movie);
      return movie;
    }
  });

  console.log("filterMovies", filteredMovies, movies);
  console.log("searchKeyWord", searchKeyword);
  return (
    <Layout>
      Search Results
      <Movies movies={filteredMovies} />
    </Layout>
  );
}
export default SearchResults;
