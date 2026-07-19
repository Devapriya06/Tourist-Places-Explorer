function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search tourist place..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "320px",
        padding: "12px 15px",
        borderRadius: "10px",
        border: "2px solid #1565C0",
        backgroundColor: "#ffffff",
        color: "#333",
        fontSize: "16px",
        outline: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    />
  );
}

export default SearchBar;