import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../services/api";
import "../styles/PlaceDetails.css";

function PlaceDetails() {
  const { id } = useParams();

  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlace();
  }, []);

  const fetchPlace = async () => {
    try {
      const response = await API.get(`/places/${id}`);
      setPlace(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!place) {
    return <h2 style={{ textAlign: "center" }}>Tourist Place Not Found</h2>;
  }

  return (
    <div className="details-container">
      <img
        src={place.image}
        alt={place.name}
        className="details-image"
      />

      <div className="details-content">
        <h1>{place.name}</h1>

        <div className="description">
  <h2>About</h2>
  <p>{place.description}</p>
</div>

<div className="info-grid">
  <div className="info-box">
    <strong>📍 Location</strong><br />
    {place.location}
  </div>

  <div className="info-box">
    <strong>🏙️ City</strong><br />
    {place.city}
  </div>

  <div className="info-box">
    <strong>🌎 State</strong><br />
    {place.state}
  </div>

  <div className="info-box">
    <strong>📅 Best Time</strong><br />
    {place.bestTime}
  </div>

  <div className="info-box">
    <strong>🎫 Entry Fee</strong><br />
    ₹{place.entryFee}
  </div>

  <div className="info-box">
    <strong>⭐ Rating</strong><br />
    {place.rating}
  </div>
</div>

<Link to="/" className="back-btn">
  ← Back to Home
</Link>
      </div>
    </div>
  );
}

export default PlaceDetails;