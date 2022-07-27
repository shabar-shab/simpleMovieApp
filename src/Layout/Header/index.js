import "./index.css";
function Header() {
  return (
    <nav>
      <h1 className="brand">Simple Movie App</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Search"
            className="search-feild"
          ></input>
        </li>
        <li>
          <a href="/home" className="button button-clear">
            Home
          </a>
        </li>
        <li>
          <a href="/myfavroutemovies" className="button button-clear">
            My Favourite Movies
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
