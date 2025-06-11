import React from 'react';
import builders from '../data/builderData';
import './Builder.css';

const BuilderInfo = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Trusted Builders</h2>

      <div className="row">
        {builders.length > 0 ? (
          builders.map((builder) => (
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
          <p className="text-muted">No builder data available.</p>
        )}
      </div>
    </div>
  );
};

export default BuilderInfo;
