import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:8080/api/properties/user/${userId}`)
        .then(res => setListings(res.data))
        .catch(err => console.error('Error fetching listings:', err));
    }
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Available Properties</h2>
      {listings.length === 0 ? (
        <p>No properties submitted yet.</p>
      ) : (
        <div className="row">
          {listings.map(listing => (
            <div className="col-md-6 mb-4" key={listing.id}>
              <div className="card p-3 shadow-sm">
                <h5 className="card-title">{listing.adTitle}</h5>
                <p><strong>Type:</strong> {listing.type}</p>
                <p><strong>Price:</strong> ₹{listing.price}</p>
                <p><strong>Location:</strong> {listing.state}</p>
                <p>{listing.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
