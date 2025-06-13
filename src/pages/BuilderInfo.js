import React, { useState, useEffect } from 'react';
import axios from 'axios';
import builders from '../data/builderData';
import './Builder.css';

const BuilderInfo = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryBuilder, setInquiryBuilder] = useState('');
  const [userId, setUserId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) setUserId(storedUserId);
  }, []);

  const handleInquiryClick = (builderName) => {
    setInquiryBuilder(builderName);
    setShowInquiry(true);
  };

  const closeInquiry = () => {
    setShowInquiry(false);
    setInquiryBuilder('');
    setFormData({
      name: '',
      email: '',
      contact: '',
      location: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('Please log in to send an inquiry.');
      return;
    }

    const inquiryPayload = {
      userId,
      builderName: inquiryBuilder,
      name: formData.name,
      email: formData.email,
      phone: formData.contact,
      state: formData.location,
      adTitle: `Inquiry for ${inquiryBuilder}`,
      description: `Inquiry submitted for builder: ${inquiryBuilder}`,
      listedBy: 'User',
    };

    try {
      const response = await axios.post('/api/properties/add', inquiryPayload);
      if (response.status === 200 || response.status === 201) {
        alert('Inquiry submitted successfully!');
        closeInquiry();
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('Failed to submit inquiry. Please try again.');
    }
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="contact"
                  className="form-control"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderInfo;
