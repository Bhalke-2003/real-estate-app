import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../data/serviceData';
import ForSale from './ForSale';
import ForRent from './ForSaleHousesForm';
import ShopOfficeRentForm from './ShopOfficeRentForm';
import ShopOfficeSaleForm from './ShopOfficeSaleForm';
import BuilderInfo from './BuilderInfo';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryService, setInquiryService] = useState('');
  const [activeForm, setActiveForm] = useState('');
  const navigate = useNavigate();

  const handlePostClick = (title) => {
    if (title === 'House/Appartment for Rent') navigate('/post/rent');
    else if (title === 'House/Appartment for Sale') navigate('/post/sale');
    else if (title === 'BUILDER DETAILS') navigate('/post/builder');
    else if (title === 'Add Shop/Office for Rent') navigate('/post/shop-rent');
    else if (title === 'Add Shop/Office for Sale') navigate('/post/shop-sale');
  };


  const handleInquiryClick = (title) => {
    setInquiryService(title);
    setShowInquiry(true);
  };

  const closeInquiry = () => {
    setShowInquiry(false);
    setInquiryService('');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Post Your Property</h2>

      {/* Top Cards */}
      <div className="row mb-5">
        {services.slice(0, 3).map((service) => (
          <div className="col-md-4 mb-5" key={service.id}>
            <ServiceCard service={service} />
            <div className="d-flex justify-content-center mt-3 gap-3">
              <button
                className="btn btn-primary"
                onClick={() => handlePostClick(service.title)}
              >
                {service.title === 'BUILDER DETAILS' ? 'Builder' : 'Post Property'}
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleInquiryClick(service.title)}
              >
                Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mb-4 fw-bold text-primary">Shops and Offices</h2>
      <div className="row justify-content-center mb-5">
        {services.slice(3).map((service) => (
          <div className="col-md-4 mb-5" key={service.id}>
            <ServiceCard service={service} />
            <div className="d-flex justify-content-center mt-3 gap-3">
              <button
                className="btn btn-primary"
                onClick={() => handlePostClick(service.title)}
              >
                {service.title === 'BUILDER DETAILS' ? 'Builder' : 'Post Property'}
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleInquiryClick(service.title)}
              >
                Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render Forms Conditionally */}
      {activeForm === 'House/Appartment for Rent' && <ForRent />}
      {activeForm === 'House/Appartment for Sale' && <ForSale />}
      {activeForm === 'BUILDER DETAILS' && <BuilderInfo />}
      {activeForm === 'Add Shop/Office for Rent' && <ShopOfficeRentForm />}
      {activeForm === 'Add Shop/Office for Sale' && <ShopOfficeSaleForm />}

      {/* Inquiry Modal */}
      {showInquiry && (
        <div className="inquiry-popup">
          <div className="inquiry-form position-relative">
            <button
              type="button"
              className="close-btn"
              onClick={closeInquiry}
              aria-label="Close"
            >
              &times;
            </button>

            <h5 className="mb-3 text-center">Inquiry for: {inquiryService}</h5>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Contact" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Location" required />
              </div>
              <button type="submit" className="btn btn-success w-100">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
