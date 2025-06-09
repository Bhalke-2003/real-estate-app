import React, { useState } from "react";

const suggestions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "2 BHK",
  "3 BHK",
  "Villa",
  "Apartment",
  "Furnished",
  "Unfurnished",
  "For Sale",
  "For Rent",
];

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (!val) {
      setFiltered([]);
      return;
    }
    const filteredSuggestions = suggestions.filter((s) =>
      s.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(filteredSuggestions);
  };

  return (
    <div style={{ position: "relative", maxWidth: 300 }}>
      <input
        type="text"
        placeholder="Search for property, city, type..."
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(query);
            setFiltered([]);
          }
        }}
        style={{ width: "100%", padding: "8px" }}
      />
      {filtered.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "absolute",
            background: "white",
            width: "100%",
            border: "1px solid #ccc",
            maxHeight: 150,
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filtered.map((s, idx) => (
            <li
              key={idx}
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={() => {
                setQuery(s);
                onSearch(s);
                setFiltered([]);
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
