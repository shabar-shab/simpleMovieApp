import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { MOVIES } from "../../Utlis";
import Movies from "../../Components/Movies";
import { useLocation } from "react-router";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchKeyword, setSearchKeyWord] = useState(
    queryParams.get("q") ?? ""
  );

  const updatUseEffect = queryParams.get("q")?? "";

  const [movies, setMovies] = useState(MOVIES);
  useEffect(() => {
    setSearchKeyWord(queryParams.get("q") ?? "");
    const preMovies = JSON.parse(localStorage.getItem("allMovies"));
    if (preMovies) {
      setMovies(preMovies);
    }
  },[updatUseEffect]);

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  return (
    <Layout>
      Search Results
      {filteredMovies && <Movies movies={filteredMovies} />}
      {filteredMovies.length === 0 && (
        <div>No Search Results Found</div>
      )}
    </Layout>
  );
}
export default SearchResults;
