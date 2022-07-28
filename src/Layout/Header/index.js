import "./index.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchKeyword, setSearchKeyWord] = useState(
    queryParams.get("q") ?? ""
  );

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleQuery();
      }
    });
    // return window.removeEventListener("keypress");
  });

  const handleQuery = () => {
    const searchParams = new URLSearchParams();
    const nameParam = searchKeyword.trim();
    if (nameParam !== "") {
      searchParams.set("q", nameParam);
      navigate(`../searchResults?${searchParams.toString()}`);
    }
  };
  return (
    <nav>
      <h1 className="brand">Simple Movie App</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Search"
            className="search-feild"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyWord(e.target.value);
            }}
          ></input>
        </li>
        <li>
          <SearchIcon onClick={handleQuery} />
        </li>
        <li>
          <a href="/" className="button button-clear">
            Home
          </a>
        </li>
        <li>
          <a href="/myfavourite" className="button button-clear">
            My Favourite Movies
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
