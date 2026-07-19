function StateFilter({ stateFilter, setStateFilter, places }) {
  const states = [...new Set(places.map((place) => place.state))];

  return (
    <select
      value={stateFilter}
      onChange={(e) => setStateFilter(e.target.value)}
      style={{
  width: "220px",
  padding: "12px 15px",
  borderRadius: "10px",
  border: "2px solid #1565C0",
  backgroundColor: "#ffffff",
  color: "#333",
  fontSize: "16px",
  outline: "none",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
}}
    >
      <option value="">All States</option>

      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}

export default StateFilter;