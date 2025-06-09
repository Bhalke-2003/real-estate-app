import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../data/serviceData';
import OwnerDetailsForm from './OwnerDetailsForm';
import RentalList from './RentalList';
import BuilderInfo from './BuilderInfo';

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRentals, setShowRentals] = useState(false);
  const [showBuilders, setShowBuilders] = useState(false);
  const [rentalProperties, setRentalProperties] = useState([]);

  const handleCardClick = (title) => {
    setShowForm(false);
    setShowRentals(false);
    setShowBuilders(false);
    if (title === 'OWNER DETAILS') setShowForm(true);
    else if (title === 'RENTAL') setShowRentals(true);
    else if (title === 'BUILDER DETAILS') setShowBuilders(true);
  };

  const handleFormSubmit = (property) => {
    setRentalProperties([...rentalProperties, property]);
    setShowForm(false);
    setShowRentals(true);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div onClick={() => handleCardClick(service.title)}>
              <ServiceCard service={service} />
            </div>
          </div>
        ))}
      </div>

      {showForm && <OwnerDetailsForm onSubmit={handleFormSubmit} />}
      {showRentals && <RentalList properties={rentalProperties} />}
      {showBuilders && <BuilderInfo />}
    </div>
  );
};

export default ServicesPage;