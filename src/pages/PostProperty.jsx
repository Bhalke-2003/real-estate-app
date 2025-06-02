import React from 'react';
import { useLocation } from 'react-router-dom';

// Import forms or build in-place
import ForSaleHousesForm from '../pages/ForSaleHousesForm';
import ForRentHousesForm from '../pages/ForRentHousesForm';
// import others...

const PostProperty = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyType = queryParams.get('propertyType');

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Post Property - {propertyType}</h2>

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
