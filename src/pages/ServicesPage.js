import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../data/serviceData';
import OwnerDetailsForm from './OwnerDetailsForm';
import ForSaleForm from './ForSale';
import RentalList from './RentalList';
import BuilderInfo from './BuilderInfo';

const ServicesPage = () => {
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [showSaleForm, setShowSaleForm] = useState(false);
  const [showRentals, setShowRentals] = useState(false);
  const [showBuilders, setShowBuilders] = useState(false);
  const [rentalProperties, setRentalProperties] = useState([]);
  const [saleProperties, setSaleProperties] = useState([]);

  const handleCardClick = (title) => {
    setShowRentalForm(false);
    setShowSaleForm(false);
    setShowRentals(false);
    setShowBuilders(false);

    if (title === 'HOUSE FOR RENT') setShowRentalForm(true);
    else if (title === 'HOUSE FOR SALE') setShowSaleForm(true);
    else if (title === 'RENTAL') setShowRentals(true);
    else if (title === 'BUILDER DETAILS') setShowBuilders(true);
  };

  const handleRentalFormSubmit = (property) => {
    setRentalProperties([...rentalProperties, property]);
    setShowRentalForm(false);
    setShowRentals(true);
  };

  const handleSaleFormSubmit = (property) => {
    setSaleProperties([...saleProperties, property]);
    setShowSaleForm(false);
    // You can add a SalesList page similar to RentalList if needed
    alert("House for Sale added successfully!");
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

      {showRentalForm && <OwnerDetailsForm onSubmit={handleRentalFormSubmit} />}
      {showSaleForm && <ForSaleForm onSave={handleSaleFormSubmit} />}
      {showRentals && <RentalList properties={rentalProperties} />}
      {showBuilders && <BuilderInfo />}
    </div>
  );
};

export default ServicesPage;
