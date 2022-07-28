import "./App.css";
import MyFavouriteMovies from "./Pages/MyFavourite";
import SearchResults from "./Pages/SearchResults";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/myfavourite"
            exact
            element={<MyFavouriteMovies />}
          ></Route>
          <Route
            path="/searchResults"
            exact
            element={<SearchResults />}
          ></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
