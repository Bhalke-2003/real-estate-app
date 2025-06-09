import React, { useState } from 'react';
import builders from '../data/builderData';
import SearchBar from "../components/SearchBar";
import './Builder.css';

const BuilderInfo = () => {
  const [query, setQuery] = useState("");

  const filteredBuilders = builders.filter(builder =>
    builder.name.toLowerCase().includes(query.toLowerCase()) ||
    builder.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Trusted Builders</h2>

      {/* Search Bar */}
      <SearchBar onSearch={setQuery} />

      <div className="row">
        {filteredBuilders.length > 0 ? (
          filteredBuilders.map((builder) => (
            <div key={builder.id} className="col-md-4 mb-4">
              <div className="card builder-card shadow-sm h-100">
                <img 
                  src={builder.image} 
                  alt={builder.name} 
                  className="card-img-top builder-img" 
                />
                <div className="card-body">
                  <h5 className="card-title">{builder.name}</h5>
                  <p className="card-text">{builder.description}</p>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No builders match your search.</p>
        )}
      </div>
    </div>
  );
};

export default BuilderInfo;
