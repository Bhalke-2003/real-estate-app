import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/type/rent')
      .then(res => setRentals(res.data))
      .catch(err => console.error('Error fetching rental listings:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Rental Listings</h2>
      {rentals.map(property => (
        <div key={property.id} className="card mb-3 p-3">
          <h5>{property.adTitle}</h5>
          <p>{property.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RentalList;
