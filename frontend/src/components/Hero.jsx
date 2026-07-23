import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  const role = localStorage.getItem("role");
  return (
    <div className="hero">
      <h1> Tourist Places Explorer</h1>

      <p>
        Explore Incredible Destinations Across India
      </p>
      
    </div>
  );
}

export default Hero;