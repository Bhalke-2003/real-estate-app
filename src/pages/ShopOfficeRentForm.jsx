import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopOfficeSaleForm = () => {
  const [formData, setFormData] = useState({
    furnishing: '',
    projectStatus: '',
    listedBy: '',
    superBuiltUpArea: '',
    carpetArea: '',
    maintenance: '',
    carParking: '',
    washrooms: '',
    projectName: '',
    adTitle: '',
    description: '',
    price: '',
    state: '',
    name: '',
    phone: '',
    photos: [],
  });

  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Replace this with your actual auth logic or user retrieval
    const storedUserId = localStorage.getItem('userId');
    const storedName = localStorage.getItem('userName');

    if (storedUserId) setUserId(storedUserId);
    if (storedName) setFormData((prev) => ({ ...prev, name: storedName }));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photos') {
      setFormData({ ...formData, photos: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User not logged in. Please login to continue.');
      return;
    }

    const submissionData = new FormData();

    // Append form fields
    for (let key in formData) {
      if (key === 'photos') {
        for (let i = 0; i < formData.photos.length; i++) {
          submissionData.append('photos', formData.photos[i]);
        }
      } else {
        submissionData.append(key, formData[key]);
      }
    }

    // Append userId
    submissionData.append('userId', userId);

    try {
      const res = await axios.post('http://localhost:8080/api/properties/add', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      if (res.status === 200 || res.status === 201) {
        alert('Property posted successfully!');
        console.log('Response:', res.data);
      }
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Failed to post property. Please try again.');
    }
  };

  return (
    <div className="shop-sale-form container">
      <h2 className="text-center mb-4">Post your Ad</h2>

      <form onSubmit={handleSubmit}>
        <h5>Include some details</h5>

        <h5 className="mt-4">Review your details</h5>
        <label>Name</label>
        <input type="text" maxLength={70} className="form-control" name="adTitle" onChange={handleChange} required  />
        <label>Furnishing</label>
        <select className="form-select" name="furnishing" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Furnished</option>
          <option>Semi-Furnished</option>
          <option>Unfurnished</option>
        </select>

        <label>Project Status</label>
        <select className="form-select" name="projectStatus" onChange={handleChange} required>
          <option value="">Select</option>
          <option>New Launch</option>
          <option>Ready to Move</option>
          <option>Under Construction</option>
        </select>

        <label>Listed By</label>
        <select className="form-select" name="listedBy" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Builder</option>
          <option>Dealer</option>
          <option>Owner</option>
        </select>

        <div className="row">
          <div className="col-md-6">
            <label>Super Builtup Area (sqft) *</label>
            <input type="number" className="form-control" name="superBuiltUpArea" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Carpet Area (sqft) *</label>
            <input type="number" className="form-control" name="carpetArea" onChange={handleChange} required />
          </div>
        </div>

        <label>Maintenance (Monthly)</label>
        <input type="number" className="form-control" name="maintenance" onChange={handleChange} />

        <div className="row">
          <div className="col-md-6">
            <label>Car Parking</label>
            <select className="form-select" name="carParking" onChange={handleChange}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>3+</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Washrooms</label>
            <input type="number" className="form-control" name="washrooms" onChange={handleChange} />
          </div>
        </div>

        <label>Project Name</label>
        <input type="text" maxLength={70} className="form-control" name="projectName" onChange={handleChange} />

        <label>Ad Title *</label>
        <input type="text" maxLength={70} className="form-control" name="adTitle" onChange={handleChange} required />

        <label>Description *</label>
        <textarea className="form-control" rows="5" maxLength={4096} name="description" onChange={handleChange} required />

        <label>Price *</label>
        <div className="input-group mb-3">
          <span className="input-group-text">₹</span>
          <input type="number" className="form-control" name="price" onChange={handleChange} required />
        </div>

        <label>Upload up to 20 photos</label>
        <input type="file" className="form-control" name="photos" accept="image/*" onChange={handleChange} multiple required />

        <h5 className="mt-4">Confirm your location</h5>
        <label>State *</label>
        <input type="text" className="form-control" name="state" onChange={handleChange} required />

        <label>Mobile Phone Number *</label>
        <div className="input-group">
          <span className="input-group-text">+91</span>
          <input type="tel" className="form-control" name="phone" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-success mt-4">POST NOW</button>
      </form>
    </div>
  );
};

export default ShopOfficeSaleForm;
