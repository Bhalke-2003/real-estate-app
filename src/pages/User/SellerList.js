import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/type/sale')
      .then(res => setSales(res.data))
      .catch(err => console.error('Error fetching sale listings:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Buy Listings</h2>
      {sales.map(property => (
        <div key={property.id} className="card mb-3 p-3">
          <h5>{property.adTitle}</h5>
          <p>{property.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SellerList;
