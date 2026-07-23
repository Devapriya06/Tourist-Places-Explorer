import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import AddPlace from "./pages/AddPlace";
import EditPlace from "./pages/EditPlace";
import NotFound from "./pages/NotFound";
import ManagePlaces from "./pages/ManagePlaces";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const role = localStorage.getItem("role");
  const location = useLocation();

  return (
  <>
  {location.pathname !== "/login" && <Navbar />}

  <div className={location.pathname !== "/login" ? "page-content" : ""}>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={role ? <Home /> : <Navigate to="/login" />}
      />

      <Route path="/place/:id" element={<PlaceDetails />} />

      <Route
        path="/add"
        element={role === "admin" ? <AddPlace /> : <Navigate to="/" />}
      />

      <Route
        path="/edit/:id"
        element={role === "admin" ? <EditPlace /> : <Navigate to="/" />}
      />

      <Route
        path="/manage"
        element={role === "admin" ? <ManagePlaces /> : <Navigate to="/" />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
</>
);
}
export default App;