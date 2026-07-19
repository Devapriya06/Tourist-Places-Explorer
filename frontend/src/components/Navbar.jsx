import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌍 Tourist Places Explorer</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Place</Link>
      </div>
    </nav>
  );
}

export default Navbar;