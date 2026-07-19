import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import API from "../services/api";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import StateFilter from "../components/StateFilter";

function Home() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await API.get("/places");
      setPlaces(response.data);
    } catch (error) {
      console.log(error);
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

  return (
    <div className="home">
      <Hero />
    
      <div className="controls">
  <SearchBar search={search} setSearch={setSearch} />

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
      <h2>😕 No Places Found</h2>
      <p>
        
      </p>
    </div>
  )}
</div>
      <Footer />
    </div>
  );
}

export default Home;