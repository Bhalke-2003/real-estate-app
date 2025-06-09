
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

const allProperties = [ 
  {
    id: 1,
    adTitle: "Beautiful 2 BHK Apartment",
    type: "Apartment",
    price: 5000000,
    state: "Mumbai",
    bhk: 2,
    description: "Near park, fully furnished",
    status: "APPROVED",
  },
  {
    id: 2,
    adTitle: "Luxury Villa for Sale",
    type: "Villa",
    price: 25000000,
    state: "Bangalore",
    bhk: 4,
    description: "With swimming pool and garden",
    status: "PENDING",
  },
  {
    id: 3,
    adTitle: "Affordable 1 BHK",
    type: "Apartment",
    price: 3000000,
    state: "Delhi",
    bhk: 1,
    description: "Ideal for bachelors",
    status: "APPROVED",
  },
];

export default function PropertyListingPage() {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate fetching only approved properties
    const approvedProperties = allProperties.filter(
      (p) => p.status === "APPROVED"
    );
    setProperties(approvedProperties);
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);

    // Filter approved properties by search query (simple includes)
    const filtered = allProperties.filter(
      (p) =>
        p.status === "APPROVED" &&
        (p.adTitle.toLowerCase().includes(query.toLowerCase()) ||
          p.type.toLowerCase().includes(query.toLowerCase()) ||
          p.state.toLowerCase().includes(query.toLowerCase()))
    );
    setProperties(filtered);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Properties for Sale & Rent</h2>
      <SearchBar onSearch={handleSearch} />
      <div style={{ marginTop: 20 }}>
        {properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>
    </div>
  );
}
