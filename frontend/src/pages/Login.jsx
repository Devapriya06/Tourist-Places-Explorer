import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem("role", "admin");
    setError("");
    navigate("/");
    return;
  }

  if (email === "user@gmail.com" && password === "user123") {
    localStorage.setItem("role", "user");
    setError("");
    navigate("/");
    return;
  }

  setError("Invalid email or password.");
};

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Tourist Places Explorer</h1>

<p>Explore Incredible Destinations Across India</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;