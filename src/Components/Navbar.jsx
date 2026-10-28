import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/books">
        BookDB
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/books">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new-releases">
              New Releases
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link"
              data-bs-toggle="dropdown"
            >
              Filter
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">A to Z</button></li>
              <li><button className="dropdown-item">Newly added</button></li>
              <li><button className="dropdown-item">Latest releases</button></li>
              <li><button className="dropdown-item">Most read</button></li>
            </ul>
          </li>
        </ul>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search books"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;