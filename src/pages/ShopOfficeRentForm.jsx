import React, { useState } from 'react';

const ShopOfficeRentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rent: '',
    contact: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    alert('Commercial property for rent listed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h4>List Shop/Office for Rent</h4>
      <input type="text" name="name" placeholder="Property Name" onChange={handleChange} className="form-control mb-2" />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} className="form-control mb-2" />
      <input type="text" name="rent" placeholder="Monthly Rent" onChange={handleChange} className="form-control mb-2" />
      <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} className="form-control mb-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="form-control mb-2" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ShopOfficeRentForm;
