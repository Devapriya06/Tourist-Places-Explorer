import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "../styles/ManagePlaces.css";

function ManagePlaces() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const res = await API.get("/places");
      setPlaces(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteClick = (place) => {
  setSelectedPlace(place);
  setShowDeleteModal(true);
};

const confirmDelete = async () => {
  try {
    await API.delete(`/places/${selectedPlace._id || selectedPlace.id}`);

    fetchPlaces();

    setShowDeleteModal(false);
    setSelectedPlace(null);
  } catch (err) {
    console.log(err);
  }
};

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()) ||
    place.state.toLowerCase().includes(search.toLowerCase()) ||
    place.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-container">

        <div className="manage-card">

      <div className="admin-header">
  <h1>Admin Dashboard</h1>
  <p>Manage Tourist Places</p>
</div>

      <div className="top-bar">

        <input
          type="text"
          placeholder="Search by name, city or state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/add" className="add-btn">
           Add New Place
        </Link>

      </div>


      <table>

        <thead>

          <tr>
  <th>No.</th>
  <th>Image</th>
  <th>Name</th>
  <th>State</th>
  <th>City</th>
  <th>Rating</th>
  <th>Entry Fee</th>
  <th>Actions</th>
</tr>

        </thead>

        <tbody>

          {filteredPlaces.map((place, index) => (

            <tr key={place._id || place.id}>
                <td>{index + 1}</td>

              <td>
                <img src={place.image} alt={place.name} />
              </td>

              <td>{place.name}</td>
              <td>{place.state}</td>
              <td>{place.city}</td>
              <td> {place.rating}</td>
              <td>₹ {place.entryFee}</td>

            <td>
  <div className="action-buttons">

    <Link
      to={`/place/${place._id || place.id}`}
      className="view-btn"
    >
      View
    </Link>

    <Link
      to={`/edit/${place._id || place.id}`}
      className="edit-btn"
    >
      Edit
    </Link>

    <button
      className="delete-btn"
      onClick={() => handleDeleteClick(place)}
    >
      Delete
    </button>

  </div>
</td>

            </tr>

          ))}

        </tbody>

      </table>

      {showDeleteModal && (
  <div className="modal-overlay">
    <div className="delete-modal">

      <h2>Delete Tourist Place</h2>

      <p>
        Are you sure you want to delete
        <strong> "{selectedPlace?.name}" </strong>?
      </p>

      <div className="modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => {
            setShowDeleteModal(false);
            setSelectedPlace(null);
          }}
        >
          Cancel
        </button>

        <button
          className="confirm-delete-btn"
          onClick={confirmDelete}
        >
          Delete
        </button>

      </div>

    </div>
  </div>
)}
</div>

    </div>
  );
}

export default ManagePlaces;