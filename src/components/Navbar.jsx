import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex text-decoration-none align-items-center gap-2"
        >
          <i
            className="fa-solid fa-book-open fa-xl"
            style={{ color: "#0d6efd" }}
          ></i>
          <span className="fw-semibold fs-5" style={{ color: "#0d6efd" }}>
            Digital Library
          </span>
        </Link>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books" className="nav-link px-2">
            Books
          </Link>
        </li>
        <li>
          <Link to="/teams" className="nav-link px-2">
            Teams
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link px-2">
            Contact
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign-up
        </Link>
      </div>
    </header>
  );
}
