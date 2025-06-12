import React, { useState } from 'react';

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
    name: 'Simran Dhagdi',
    phone: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photos') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Property submitted successfully!');
  };

  return (
    <div className="shop-sale-form container">
      <h2 className="text-center mb-4">Post your Ad</h2>

      <form onSubmit={handleSubmit}>
        <h5>Include some details</h5>

        {/* Furnishing */}
        <label>Furnishing</label>
        <select className="form-select" name="furnishing" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Furnished</option>
          <option>Semi-Furnished</option>
          <option>Unfurnished</option>
        </select>

        {/* Project Status */}
        <label>Project Status</label>
        <select className="form-select" name="projectStatus" onChange={handleChange} required>
          <option value="">Select</option>
          <option>New Launch</option>
          <option>Ready to Move</option>
          <option>Under Construction</option>
        </select>

        {/* Listed By */}
        <label>Listed By</label>
        <select className="form-select" name="listedBy" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Builder</option>
          <option>Dealer</option>
          <option>Owner</option>
        </select>

        {/* Area & Maintenance */}
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

        {/* Parking & Washrooms */}
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

        {/* Project Name */}
        <label>Project Name</label>
        <input type="text" maxLength={70} className="form-control" name="projectName" onChange={handleChange} />

        {/* Ad Title */}
        <label>Ad Title *</label>
        <input type="text" maxLength={70} className="form-control" name="adTitle" onChange={handleChange} required />

        {/* Description */}
        <label>Description *</label>
        <textarea className="form-control" rows="5" maxLength={4096} name="description" onChange={handleChange} required />

        {/* Price */}
        <label>Price *</label>
        <div className="input-group mb-3">
          <span className="input-group-text">₹</span>
          <input type="number" className="form-control" name="price" onChange={handleChange} required />
        </div>

        {/* Photo Upload */}
        <label>Upload up to 20 photos</label>
        <input type="file" className="form-control" name="photos" accept="image/*" onChange={handleChange} multiple required />

        {/* Location */}
        <h5 className="mt-4">Confirm your location</h5>
        <label>State *</label>
        <input type="text" className="form-control" name="state" onChange={handleChange} required />

        {/* Review Details */}
        <h5 className="mt-4">Review your details</h5>
        <label>Name</label>
        <input type="text" className="form-control" value={formData.name} readOnly />

        <label>Mobile Phone Number *</label>
        <div className="input-group">
          <span className="input-group-text">+91</span>
          <input type="tel" className="form-control" name="phone" onChange={handleChange} required />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-success mt-4">POST NOW</button>
      </form>
    </div>
  );
};

export default ShopOfficeSaleForm;
