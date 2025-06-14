import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/type/rent')
      .then(res => setRentals(res.data))
      .catch(err => console.error('Error fetching rentals:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Rent Listings</h2>
      {rentals.map(property => (
        <div key={property.id} className="card mb-3 p-3">
          <h5>{property.adTitle}</h5>
          <p><strong>Location:</strong> {property.state}</p>
          <p><strong>Price:</strong> ₹{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Rentals;
