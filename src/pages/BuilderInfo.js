import React, { useState } from 'react';
import builders from '../data/builderData';
import './Builder.css';

const BuilderInfo = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryBuilder, setInquiryBuilder] = useState('');

  const handleInquiryClick = (builderName) => {
    setInquiryBuilder(builderName);
    setShowInquiry(true);
  };

  const closeInquiry = () => {
    setShowInquiry(false);
    setInquiryBuilder('');
  };

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
                  <button
                    className="btn btn-primary"
                    onClick={() => handleInquiryClick(builder.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No builder data available.</p>
        )}
      </div>

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

            <h5 className="mb-3 text-center">Inquiry for: {inquiryBuilder}</h5>
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

export default BuilderInfo;
