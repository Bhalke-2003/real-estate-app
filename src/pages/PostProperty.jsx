import React from 'react';
import { useLocation } from 'react-router-dom';
import './ForSale.css';

import ForSaleHousesForm from '../pages/ForSaleHousesForm';
import ForRentHousesForm from '../pages/ForRentHousesForm';

const PostProperty = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyType = queryParams.get('propertyType');

  return (
    <div className="container mx-auto p-6">
      {/* Marquee Heading */}
      <div className="marquee-container">
        <h2 className="marquee-heading">
          🏠 List Your Property Now - Find Your Perfect Buyer or Tenant Today! 🏠
        </h2>
      </div>

      {propertyType === 'For Sale: Houses and Apartments' && <ForSaleHousesForm />}
      {propertyType === 'For Rent: Houses and Apartments' && <ForRentHousesForm />}
      {/* Add other conditions and forms */}

      {!propertyType && (
        <p className="text-gray-500">Please select a property type from the dropdown.</p>
      )}
    </div>
  );
};

export default PostProperty;