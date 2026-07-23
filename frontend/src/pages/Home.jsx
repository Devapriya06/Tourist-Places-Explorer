import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import API from "../services/api";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import StateFilter from "../components/StateFilter";
import ManagePlaces from "./ManagePlaces"; // Change path if needed
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role");

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
  try {
    setLoading(true);

    const response = await API.get("/places");
    setPlaces(response.data);

  } catch (error) {
    console.log(error);

  } finally {
    setLoading(false);
  }
};

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesState =
      stateFilter === "" || place.state === stateFilter;

    return matchesSearch && matchesState;
  });

  if (loading) {
  return <LoadingSpinner />;
}

  return (
    <div className="home">

      {/* Hero only for User */}
      {role !== "admin" && <Hero />}

      {/* Admin Dashboard */}
      {role === "admin" ? (

        <ManagePlaces />

      ) : (

        <>
          <div className="controls">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <StateFilter
              stateFilter={stateFilter}
              setStateFilter={setStateFilter}
              places={places}
            />

          </div>

          <div className="cards">

            {filteredPlaces.length > 0 ? (

              filteredPlaces.map((place) => (
                <PlaceCard
                  key={place._id}
                  place={place}
                  fetchPlaces={fetchPlaces}
                />
              ))

            ) : (

              <div className="no-results">
                <h2>No Places Found</h2>
              </div>

            )}

          </div>
        </>

      )}

      <Footer />

    </div>
  );
}

export default Home;