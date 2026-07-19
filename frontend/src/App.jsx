import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import AddPlace from "./pages/AddPlace";
import EditPlace from "./pages/EditPlace";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/add" element={<AddPlace />} />
        <Route path="/edit/:id" element={<EditPlace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;