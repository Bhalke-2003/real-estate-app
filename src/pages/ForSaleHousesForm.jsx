import React, { useState } from "react";
import axios from "axios";
import "./ForSale.css";

const ForSaleHousesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in first.");
      return;
    }

    const data = new FormData();

    for (const key in formData) {
      if (key !== "photos") {
        data.append(key, formData[key]);
      }
    }

    formData.photos.forEach((file) => {
      data.append("photos", file);
    });

    // ✅ Add userId to form data
    data.append("userId", userId);

    // Save listing to localStorage (optional)
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

    // Reset form
    setFormData({
      name: "",
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
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Property Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        required
      />

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
        <option value="New Launch">New Launch</option>
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
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <button type="submit" style={{ marginTop: 20 }}>
        Submit
      </button>
    </form>
  );
};

export default ForSaleHousesForm;
