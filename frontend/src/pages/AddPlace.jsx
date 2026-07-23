import "../styles/AddPlace.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddPlace() {
  const [place, setPlace] = useState({
  name: "",
  state: "",
  city: "",
  image: "",
  description: "",
  bestTime: "",
  entryFee: "",
  rating: "",
  location: "",
});

  const handleChange = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
if (Number(place.entryFee) < 0) {
  return window.alert("Entry Fee cannot be negative");
  return;
}

if (Number(place.rating) < 0 || Number(place.rating) > 5) {
  window.alert("Rating must be between 0 and 5");
  return;
}

    try {
      await API.post("/places", place);
      setShowSuccessModal(true);

      setPlace({
        name: "",
        state: "",
        city: "",
        image: "",
        description: "",
        bestTime: "",
        entryFee: "",
        rating: "",
        location: "",
      });
    } catch (error) {
  console.log(error);
  window.alert("Error adding place");
}
  };

  return (
  <div className="add-place-container">
    <div className="form-card">

      <h1>Add Tourist Place</h1>
      <p className="subtitle">
        
      </p>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <input
            type="text"
            name="name"
            placeholder=" Place Name"
            value={place.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder=" State"
            value={place.state}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder=" City"
            value={place.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder=" Location"
            value={place.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder=" Image URL"
            value={place.image}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="bestTime"
            placeholder=" Best Time"
            value={place.bestTime}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="entryFee"
            placeholder=" Entry Fee"
            value={place.entryFee}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder=" Rating"
            value={place.rating}
            onChange={handleChange}
            required
          />

        </div>

        <textarea
          name="description"
          placeholder=" Description"
          value={place.description}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button className="submit-btn" type="submit">
           Add Tourist Place
        </button>

      </form>

    </div>
    {showSuccessModal && (
  <div className="modal-overlay">
    <div className="success-modal">

      <div className="success-icon"></div>

      <h2></h2>

      <p>Tourist Place Added Successfully!</p>

      <button
        className="success-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

    </div>
  </div>
)}
  </div>
);
}

export default AddPlace;