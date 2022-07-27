import "./index.css";

function Header() {
  return (
    <nav>
      <h1 className="brand">Simple Movie App</h1>
      <ul>
        <li>
          <a href="#" className="button button-clear">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="button button-clear">
            My Favourite Movies
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
