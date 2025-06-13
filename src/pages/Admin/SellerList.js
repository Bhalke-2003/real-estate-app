import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/type/sale')
      .then(res => setSellers(res.data))
      .catch(err => console.error('Error fetching sellers:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Sale Listings</h2>
      {sellers.map(property => (
        <div key={property.id} className="card mb-3 p-3">
          <h5>{property.adTitle}</h5>
          <p><strong>Location:</strong> {property.state}</p>
          <p><strong>Price:</strong> ₹{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Sellers;
