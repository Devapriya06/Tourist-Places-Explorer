import { Link } from "react-router-dom";
import API from "../services/api";
import "../styles/PlaceCard.css";

function PlaceCard({ place, fetchPlaces }) {

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      `Delete ${place.name}?`
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/places/${place._id}`);

      alert("Tourist Place Deleted Successfully!");

      fetchPlaces();
    } catch (error) {
      console.log(error);
      alert("Error deleting place");
    }
  };

  return (
    <div className="card">

      <img src={place.image} alt={place.name} />

      <div className="card-body">

        <h2>{place.name}</h2>

        <p><strong>State:</strong> {place.state}</p>

        <p><strong>City:</strong> {place.city}</p>

        <p><strong>Rating:</strong> ⭐ {place.rating}</p>

        <p className="description">
          {place.description}
        </p>

        <div className="card-actions">
          <Link to={`/place/${place._id}`} className="view-btn">
            View Details
          </Link>

          <Link to={`/edit/${place._id}`} className="edit-btn">
            Edit
          </Link>

          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
        </div>

      </div>

    </div>
  );
}

export default PlaceCard;