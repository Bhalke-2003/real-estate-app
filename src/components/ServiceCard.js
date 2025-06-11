import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card service-card h-100 d-flex flex-column">
      <img src={service.image} alt={service.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
