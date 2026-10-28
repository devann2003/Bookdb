import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome to BookDB</h2>
        <p>Discover books, authors and more.</p>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/signup" className="btn btn-outline-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;