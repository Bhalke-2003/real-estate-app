import React, { useState } from 'react';


const ShopOfficeRentForm = () => {
  const [formData, setFormData] = useState({
    furnishing: '',
    listedBy: '',
    superBuiltupArea: '',
    carpetArea: '',
    maintenance: '',
    carParking: '',
    washrooms: '',
    projectName: '',
    adTitle: '',
    description: '',
    price: '',
    photos: [],
    state: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary fw-bold mb-4">Post your Ad</h2>
      <p className='text-center'><strong>Selected category:</strong> Properties / <span className="text-success">For Rent: Shops & Offices</span></p>

      <form onSubmit={handleSubmit}>
        <h5 className="mt-4">Include some details</h5>

        {/* Furnishing */}
        <div className="mb-3">
          <label className="form-label">Furnishing</label>
          <select className="form-select" name="furnishing" onChange={handleChange} required>
            <option value="">Select</option>
            <option>Furnished</option>
            <option>Semi-Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>

        {/* Listed By */}
        <div className="mb-3">
          <label className="form-label">Listed by</label>
          <select className="form-select" name="listedBy" onChange={handleChange} required>
            <option value="">Select</option>
            <option>Builder</option>
            <option>Dealer</option>
            <option>Owner</option>
          </select>
        </div>

        {/* Area Fields */}
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="number" name="superBuiltupArea" onChange={handleChange} className="form-control" placeholder="Super Builtup area sqft *" required />
          </div>
          <div className="col-md-6">
            <input type="number" name="carpetArea" onChange={handleChange} className="form-control" placeholder="Carpet Area sqft *" required />
          </div>
        </div>

        {/* Maintenance */}
        <div className="mb-3">
          <input type="text" name="maintenance" onChange={handleChange} className="form-control" placeholder="Maintenance (Monthly)" />
        </div>

        {/* Car Parking & Washrooms */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Car Parking</label>
            <select className="form-select" name="carParking" onChange={handleChange} required>
              <option value="">Select</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>3+</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Washrooms</label>
            <input type="number" name="washrooms" onChange={handleChange} className="form-control" min="0" />
          </div>
        </div>

        {/* Project Name */}
        <div className="mb-3">
          <input type="text" name="projectName" onChange={handleChange} className="form-control" placeholder="Project Name" maxLength={70} />
        </div>

        {/* Ad Title */}
        <div className="mb-3">
          <input type="text" name="adTitle" onChange={handleChange} className="form-control" placeholder="Ad Title *" maxLength={70} required />
        </div>

        {/* Description */}
        <div className="mb-3">
          <textarea name="description" onChange={handleChange} className="form-control" rows="4" placeholder="Description *" maxLength={4096} required />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label>Price *</label>
          <div className="input-group">
            <span className="input-group-text">₹</span>
            <input type="number" name="price" onChange={handleChange} className="form-control" required />
          </div>
        </div>

        {/* Upload Photos */}
        <div className="mb-3">
          <label className="form-label">Upload up to 20 photos</label>
          <input type="file" name="photos" onChange={handleChange} className="form-control" multiple accept="image/*" required />
        </div>

        {/* Location */}
        <h5 className="mt-4">Confirm your location</h5>
        <div className="mb-3">
          <input type="text" name="state" onChange={handleChange} className="form-control" placeholder="State *" required />
        </div>

        {/* Mobile Verification */}
        <h5 className="mt-4">Let's verify your account</h5>
        <div className="mb-3">
          <label className="form-label">Mobile Phone Number *</label>
          <input type="tel" name="mobile" onChange={handleChange} className="form-control" placeholder="+91" required />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">POST NOW</button>
      </form>
    </div>
  );
};

export default ShopOfficeRentForm;
