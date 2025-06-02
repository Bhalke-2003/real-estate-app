import React, { useState } from "react";

const ForSaleHousesForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    projectStatus: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    adTitle: "",
    description: "",
    price: "",
    photos: [],
    state: "",
    name: "Akashta Bhalke",
    mobile: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photos") {
      setFormData((prev) => ({
        ...prev,
        photos: [...files],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation & submission logic here
    alert("Form submitted! Check console for data.");
    console.log(formData);
  };

  return (
    <div className="container my-3">
      <h2 className="mb-3">Post Property - For Sale: Houses & Apartments</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">

        {/* Property Type */}
        <div className="mb-3">
          <label className="form-label fw-bold">Type *</label>
          <select
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Flats / Apartments">Flats / Apartments</option>
            <option value="Independent / Builder Floors">Independent / Builder Floors</option>
            <option value="Farm House">Farm House</option>
            <option value="House & Villa">House & Villa</option>
          </select>
        </div>

        {/* BHK */}
        <div className="mb-3">
          <label className="form-label fw-bold">BHK</label>
          <select
            className="form-select"
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
          >
            <option value="">Select BHK</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4+">4+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="mb-3">
          <label className="form-label fw-bold">Bathrooms</label>
          <select
            className="form-select"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          >
            <option value="">Select Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4+">4+</option>
          </select>
        </div>

        {/* Furnishing */}
        <div className="mb-3">
          <label className="form-label fw-bold">Furnishing</label>
          <select
            className="form-select"
            name="furnishing"
            value={formData.furnishing}
            onChange={handleChange}
          >
            <option value="">Select Furnishing</option>
            <option value="Furnished">Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>

        {/* Project Status */}
        <div className="mb-3">
          <label className="form-label fw-bold">Project Status</label>
          <select
            className="form-select"
            name="projectStatus"
            value={formData.projectStatus}
            onChange={handleChange}
          >
            <option value="">Select Project Status</option>
            <option value="New Launch">New Launch</option>
            <option value="Ready to Move">Ready to Move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        {/* Listed by */}
        <div className="mb-3">
          <label className="form-label fw-bold">Listed By</label>
          <select
            className="form-select"
            name="listedBy"
            value={formData.listedBy}
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            <option value="Builder">Builder</option>
            <option value="Dealer">Dealer</option>
            <option value="Owner">Owner</option>
          </select>
        </div>

        {/* Areas and Maintenance */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Super Builtup Area (sqft) *</label>
            <input
              type="number"
              className="form-control"
              name="superBuiltupArea"
              value={formData.superBuiltupArea}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Carpet Area (sqft)</label>
            <input
              type="number"
              className="form-control"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Maintenance (Monthly)</label>
            <input
              type="number"
              className="form-control"
              name="maintenance"
              value={formData.maintenance}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>

        {/* Floors */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Total Floors</label>
            <input
              type="number"
              className="form-control"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Floor No</label>
            <input
              type="number"
              className="form-control"
              name="floorNo"
              value={formData.floorNo}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>

        {/* Car Parking */}
        <div className="mb-3">
          <label className="form-label fw-bold">Car Parking</label>
          <select
            className="form-select"
            name="carParking"
            value={formData.carParking}
            onChange={handleChange}
          >
            <option value="">Select Parking</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
          </select>
        </div>

        {/* Facing */}
        <div className="mb-3">
          <label className="form-label fw-bold">Facing</label>
          <input
            type="text"
            className="form-control"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            placeholder="e.g. East, West"
          />
        </div>

        {/* Project Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            Project Name <small className="text-muted">(max 70 chars)</small>
          </label>
          <input
            type="text"
            className="form-control"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            maxLength={70}
          />
        </div>

        {/* Ad Title */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            Ad title * <small className="text-muted">(max 70 chars)</small>
          </label>
          <input
            type="text"
            className="form-control"
            name="adTitle"
            value={formData.adTitle}
            onChange={handleChange}
            maxLength={70}
            required
            placeholder="Mention key features e.g. brand, age, type"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            Description * <small className="text-muted">(max 4096 chars)</small>
          </label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            maxLength={4096}
            required
            placeholder="Include condition, features, reason for selling"
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label fw-bold">Price *</label>
          <div className="input-group">
            <span className="input-group-text">₹</span>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
        </div>

        {/* Upload Photos */}
        <div className="mb-4">
          <label className="form-label fw-bold">Upload up to 20 photos</label>
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            className="form-control"
            onChange={handleChange}
          />
          <small className="text-muted">Max 20 photos, each up to 5MB</small>
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label fw-bold">State *</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            placeholder="Enter your state"
          />
        </div>

        {/* User Details */}
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">
            Mobile Phone Number * <small className="text-muted">+91</small>
          </label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="Enter 10 digit mobile number"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 fw-bold">
          POST NOW
        </button>
      </form>
    </div>
  );
};

export default ForSaleHousesForm;
