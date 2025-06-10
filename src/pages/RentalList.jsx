import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RentalList = () => {
  const [rentalFlats, setRentalFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRentalFlats = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/properties/all"); // Update this to your actual path
        setRentalFlats(response.data);
      } catch (err) {
        setError("Failed to fetch rental listings.");
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRentalFlats();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="mb-4">Rental Listings</h3>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : rentalFlats.length === 0 ? (
        <p>No rental properties found.</p>
      ) : (
        <div className="row">
          {rentalFlats.map((flat, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={flat.image || "https://via.placeholder.com/300x200"}
                  className="card-img-top"
                  alt={flat.projectName || "Rental Property"}
                />
                <div className="card-body">
                  <h5 className="card-title">{flat.name || "No Title"}</h5>
                  <p className="card-text">{flat.listedBy || "Location not provided"}</p>
                  <p className="card-text">{flat.mobile || "Location not provided"}</p>
                  <p className="card-text">{flat.state || "Location not provided"}</p>

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
