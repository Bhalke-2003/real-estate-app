import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForRentHousesForm= () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    adTitle: "",
    description: "",
    rent: "",
    locality: "",
    location: "",
    bachelorsAllowed: "",
    photos: [],
    state: "",
    name: "Akshata Bhalke",
    mobile: "",
  });

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
    console.log("Submitted Form Data:", formData);
    navigate("/confirmation"); // ✅ Redirect to confirmation page
  };

  return (
    <div className="container my-4" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">Post Property - For Rent</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded bg-white shadow"
        style={{ boxShadow: "0 0 15px rgba(0,0,0,0.15)" }}
      >
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
            {[1, 2, 3, 4].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
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
            {[1, 2, 3, 4].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
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

        {/* Listed By */}
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

        {/* Area Inputs */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Super Builtup Area *</label>
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
            <label className="form-label fw-bold">Carpet Area</label>
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
            <label className="form-label fw-bold">Maintenance</label>
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

        {/* Floor and Parking */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Total Floors</label>
            <input
              type="number"
              className="form-control"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleChange}
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
            />
          </div>
        </div>

        {/* Parking, Facing */}
        <div className="mb-3">
          <label className="form-label fw-bold">Car Parking</label>
          <select
            className="form-select"
            name="carParking"
            value={formData.carParking}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Facing</label>
          <input
            type="text"
            className="form-control"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
          />
        </div>

        {/* Ad Title & Description */}
        <div className="mb-3">
          <label className="form-label fw-bold">Ad Title *</label>
          <input
            type="text"
            className="form-control"
            name="adTitle"
            value={formData.adTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Description *</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rent */}
        <div className="mb-3">
          <label className="form-label fw-bold">Rent (Monthly) *</label>
          <input
            type="number"
            className="form-control"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            required
          />
        </div>

        {/* Locality & Location */}
        <div className="mb-3">
          <label className="form-label fw-bold">Locality *</label>
          <input
            type="text"
            className="form-control"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Location *</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bachelors Allowed */}
        <div className="mb-3">
          <label className="form-label fw-bold">Bachelors Allowed?</label>
          <select
            className="form-select"
            name="bachelorsAllowed"
            value={formData.bachelorsAllowed}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Upload */}
        <div className="mb-3">
          <label className="form-label fw-bold">Upload Photos</label>
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        {/* State, Mobile, Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">State *</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
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
          <label className="form-label fw-bold">Mobile *</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100 fw-bold">
          POST NOW
        </button>
      </form>
    </div>
  );
};

export default ForRentHousesForm; 