import React, { useEffect, useState } from 'react';

const RentalList = () => {
  const [rentalFlats, setRentalFlats] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('rentalFlats') || '[]'; // fallback to empty array string

    try {
      const parsed = JSON.parse(stored);
      // Only update state if parsed is an array
      if (Array.isArray(parsed)) {
        setRentalFlats(parsed);
      } else {
        setRentalFlats([]);
        console.warn("Rental flats data is not an array, resetting to empty array");
      }
    } catch (error) {
      console.error("Failed to parse rental flats from localStorage:", error);
      setRentalFlats([]);
    }
  }, []);

  return (
    <div className="container my-5">
      <h3 className="mb-4">Rental Listings</h3>
      {rentalFlats.length === 0 ? (
        <p>No rental properties found.</p>
      ) : (
        <div className="row">
          {rentalFlats.map((flat, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={flat.image || "https://via.placeholder.com/300x200"}
                  className="card-img-top"
                  alt={flat.title || "Rental Property"}
                />
                <div className="card-body">
                  <h5 className="card-title">{flat.title || "No Title"}</h5>
                  <p className="card-text">{flat.location || "Location not provided"}</p>
                  <p className="card-text">
                    <strong>{flat.price || "Price not available"}</strong>
                  </p>
                  <p className="card-text">{flat.description || "No description available."}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalList;
