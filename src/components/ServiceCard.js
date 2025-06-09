import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.link} style={{ textDecoration: 'none' }}>
      <div className="card service-card">
        <img src={service.image} alt={service.title} />
        <div className="card-body">
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
