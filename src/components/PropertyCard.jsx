import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>{property.adTitle}</h3>
      <p>
        <strong>Type:</strong> {property.type} | <strong>Price:</strong> ₹
        {property.price}
      </p>
      <p>
        <strong>Location:</strong> {property.state} | <strong>BHK:</strong>{" "}
        {property.bhk}
      </p>
      <p>{property.description}</p>
    </div>
  );
}
