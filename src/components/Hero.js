// src/components/Hero.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (location) queryParams.append('location', location);
    if (type) queryParams.append('type', type);
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="bg-light py-5 text-center">
      <h1 className="mb-3">Find Your Dream Property</h1>
      <p className="mb-4">Search among hundreds of listings across the country.</p>
      <div className="container d-flex justify-content-center gap-2">
        <input
          type="text"
          placeholder="Search by location"
          className="form-control w-25"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          className="form-select w-25"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="Flat">Flat</option>
          <option value="Villa">Villa</option>
        </select>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
