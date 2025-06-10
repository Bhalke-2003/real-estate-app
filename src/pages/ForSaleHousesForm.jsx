import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD

const ForSaleHousesForm = ({ onSuccess }) => {
  const initialState = {
=======
import "./ForSale.css";


const ForSaleHousesForm = () => {
  const [formData, setFormData] = useState({
    name:"",
>>>>>>> ac92c42c263ac6ee0440201782385a3aeb1ed94e
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
    mobile: "",
<<<<<<< HEAD
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photos") {
      const validFiles = [];
      for (let file of files) {
        if (file.size > 5 * 1024 * 1024) {
          alert(`${file.name} exceeds the 5MB size limit.`);
        } else {
          validFiles.push(file);
        }
      }

      if (validFiles.length > 20) {
        alert("You can upload up to 20 photos only.");
        validFiles.splice(20);
      }

      setFormData((prev) => ({
        ...prev,
        photos: validFiles,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append text fields
=======
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

>>>>>>> ac92c42c263ac6ee0440201782385a3aeb1ed94e
    for (const key in formData) {
      if (key !== "photos") {
        data.append(key, formData[key]);
      }
    }
<<<<<<< HEAD

    // Append image files
    formData.photos.forEach((file) => {
      data.append("photos", file);
    });

    try {
      const res = await axios.post("http://localhost:8080/api/properties/all", data);
      console.log("Uploaded successfully:", res.data);
      if (onSuccess) onSuccess(res.data);
      setFormData({ ...initialState });
    } catch (err) {
      console.error("Error uploading property:", err.response?.data || err.message);
    }
=======

    formData.photos.forEach((file) => {
      data.append("photos", file);
    });

    // Save listing to localStorage
    const listing = {
      type: formData.type,
      price: formData.price,
      state: formData.state,
      contact: formData.mobile,
      email: formData.email,
    };

    const existingListings = JSON.parse(localStorage.getItem("saleListings")) || [];
    existingListings.push(listing);
    localStorage.setItem("saleListings", JSON.stringify(existingListings));

    try {
      const res = await axios.post("http://localhost:8080/api/properties/add", data);
      console.log("Uploaded successfully:", res.data);
      alert("Property submitted!");
    } catch (err) {
      console.error("Error uploading property:", err.response?.data || err.message);
      alert("Failed to submit property");
    }

    setFormData({
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
      mobile: "",
      email: "",
    });
>>>>>>> ac92c42c263ac6ee0440201782385a3aeb1ed94e
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      <input
        type="text"
        placeholder="name"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        required
      />

<<<<<<< HEAD
        {/* --- Property Type --- */}
        <div className="mb-3">
          <label className="form-label fw-bold">Type *</label>
          <select className="form-select" name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Flats / Apartments">Flats / Apartments</option>
            <option value="Independent / Builder Floors">Independent / Builder Floors</option>
            <option value="Farm House">Farm House</option>
            <option value="House & Villa">House & Villa</option>
          </select>
        </div>

        {/* BHK, Bathrooms, Furnishing, Project Status, ListedBy */}
        {/* BHK */}
        <div className="mb-3">
          <label className="form-label fw-bold">BHK</label>
          <select className="form-select" name="bhk" value={formData.bhk} onChange={handleChange}>
            <option value="">Select BHK</option>
            {[1, 2, 3, 4, "4+"].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div className="mb-3">
          <label className="form-label fw-bold">Bathrooms</label>
          <select className="form-select" name="bathrooms" value={formData.bathrooms} onChange={handleChange}>
            <option value="">Select Bathrooms</option>
            {[1, 2, 3, 4, "4+"].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>

        {/* Furnishing */}
        <div className="mb-3">
          <label className="form-label fw-bold">Furnishing</label>
          <select className="form-select" name="furnishing" value={formData.furnishing} onChange={handleChange}>
            <option value="">Select Furnishing</option>
            <option value="Furnished">Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>

        {/* Project Status */}
        <div className="mb-3">
          <label className="form-label fw-bold">Project Status</label>
          <select className="form-select" name="projectStatus" value={formData.projectStatus} onChange={handleChange}>
            <option value="">Select Project Status</option>
            <option value="New Launch">New Launch</option>
            <option value="Ready to Move">Ready to Move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        {/* Listed By */}
        <div className="mb-3">
          <label className="form-label fw-bold">Listed By</label>
          <select className="form-select" name="listedBy" value={formData.listedBy} onChange={handleChange}>
            <option value="">Select Option</option>
            <option value="Builder">Builder</option>
            <option value="Dealer">Dealer</option>
            <option value="Owner">Owner</option>
          </select>
        </div>

        {/* Areas */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Super Builtup Area *</label>
            <input type="number" className="form-control" name="superBuiltupArea" value={formData.superBuiltupArea} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Carpet Area</label>
            <input type="number" className="form-control" name="carpetArea" value={formData.carpetArea} onChange={handleChange} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Maintenance</label>
            <input type="number" className="form-control" name="maintenance" value={formData.maintenance} onChange={handleChange} />
          </div>
        </div>

        {/* Floor Details */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Total Floors</label>
            <input type="number" className="form-control" name="totalFloors" value={formData.totalFloors} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Floor No</label>
            <input type="number" className="form-control" name="floorNo" value={formData.floorNo} onChange={handleChange} />
          </div>
        </div>

        {/* Car Parking */}
        <div className="mb-3">
          <label className="form-label fw-bold">Car Parking</label>
          <select className="form-select" name="carParking" value={formData.carParking} onChange={handleChange}>
            {[0, 1, 2, 3, "3+"].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>

        {/* Facing */}
        <div className="mb-3">
          <label className="form-label fw-bold">Facing</label>
          <input type="text" className="form-control" name="facing" value={formData.facing} onChange={handleChange} placeholder="e.g. East, West" />
        </div>

        {/* Project Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Project Name</label>
          <input type="text" className="form-control" name="projectName" value={formData.projectName} onChange={handleChange} maxLength={70} />
        </div>

        {/* Ad Title */}
        <div className="mb-3">
          <label className="form-label fw-bold">Ad Title *</label>
          <input type="text" className="form-control" name="adTitle" value={formData.adTitle} onChange={handleChange} maxLength={70} required />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label fw-bold">Description *</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows={5} maxLength={4096} required />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label fw-bold">Price *</label>
          <div className="input-group">
            <span className="input-group-text">₹</span>
            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
          </div>
        </div>

        {/* Photos */}
        <div className="mb-3">
          <label className="form-label fw-bold">Upload up to 20 photos</label>
          <input type="file" name="photos" multiple accept="image/*" className="form-control" onChange={handleChange} />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label fw-bold">State *</label>
          <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
        </div>

        {/* Contact Info */}
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} readOnly />
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Mobile *</label>
          <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">POST NOW</button>
      </form>
    </div>
=======
      <input
        type="number"
        placeholder="BHK"
        value={formData.bhk}
        onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Bathrooms"
        value={formData.bathrooms}
        onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
        required
      />

      <select
        value={formData.furnishing}
        onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
        required
      >
        <option value="">Select Furnishing</option>
        <option value="Furnished">Furnished</option>
        <option value="Semi-Furnished">Semi-Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
      </select>

      <select
        value={formData.projectStatus}
        onChange={(e) => setFormData({ ...formData, projectStatus: e.target.value })}
        required
      >
        <option value="">Select Project Status</option>
        <option value="Ready to Move">Ready to Move</option>
        <option value="Under Construction">Under Construction</option>
      </select>

      <select
      value={formData.listedBy}
      onChange={(e) => setFormData({ ...formData, listedBy: e.target.value })}
      required
      >
        <option value="">Listed By</option>
        <option value="Owner">Owner</option>
        <option value="Builder">Builder</option>
        <option value="Dealer">Dealer</option>
      </select>


      <input
        type="number"
        placeholder="Super Built-up Area (sq.ft)"
        value={formData.superBuiltupArea}
        onChange={(e) => setFormData({ ...formData, superBuiltupArea: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Carpet Area (sq.ft)"
        value={formData.carpetArea}
        onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Maintenance (per month)"
        value={formData.maintenance}
        onChange={(e) => setFormData({ ...formData, maintenance: e.target.value })}
      />

      <input
        type="number"
        placeholder="Total Floors"
        value={formData.totalFloors}
        onChange={(e) => setFormData({ ...formData, totalFloors: e.target.value })}
      />

      <input
        type="number"
        placeholder="Floor No"
        value={formData.floorNo}
        onChange={(e) => setFormData({ ...formData, floorNo: e.target.value })}
      />

      <select
        value={formData.carParking}
        onChange={(e) => setFormData({ ...formData, carParking: e.target.value })}
      >
        <option value="">Car Parking</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>

      <select
        value={formData.facing}
        onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
      >
        <option value="">Facing</option>
        <option value="East">East</option>
        <option value="West">West</option>
        <option value="North">North</option>
        <option value="South">South</option>
      </select>

      <input
        type="text"
        placeholder="Project Name"
        value={formData.projectName}
        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
      />

      <input
        type="text"
        placeholder="Ad Title"
        value={formData.adTitle}
        onChange={(e) => setFormData({ ...formData, adTitle: e.target.value })}
        required
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />

      <input
        type="file"
        multiple
        onChange={(e) => setFormData({ ...formData, photos: Array.from(e.target.files) })}
      />

      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        required
      />

      <input
        type="tel"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        required
      />


      <input
      type="email"
      id="email"
      name="email"
      value={formData.email || ''}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      placeholder="Enter your email"
      />

      <button type="submit" style={{ marginTop: 20 }}>
        Submit
      </button>
    </form>
>>>>>>> ac92c42c263ac6ee0440201782385a3aeb1ed94e
  );
};

export default ForSaleHousesForm;
