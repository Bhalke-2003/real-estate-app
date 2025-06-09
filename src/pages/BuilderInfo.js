// src/pages/BuilderInfo.js
import React from 'react';
import builders from '../data/builderData';

const BuilderInfo = () => {
  return (
    <div className="container py-4">
      <h2>Builders Connected with Us</h2>
      <div className="row">
        {builders.map((builder, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card p-3">
              <h5>{builder.name}</h5>
              <p><strong>Contact:</strong> {builder.contact}</p>
              <p><strong>Email:</strong> {builder.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuilderInfo;
