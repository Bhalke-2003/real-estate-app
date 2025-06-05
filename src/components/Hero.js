import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/background.jpg';
import './HeroSection.css';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (location) queryParams.append('location', location);
    if (type) queryParams.append('type', type);
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <div>
      {/* Background Image Section with Text Overlay */}
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "100%",
           backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          color: "white",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
     
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(135deg, rgba(255, 102, 0, 0.95) 0%, rgba(255, 140, 0, 0.85) 40%, rgba(255, 165, 79, 0.7) 70%, rgba(255, 165, 79, 0.4) 100%)",
            boxShadow: "4px 0 15px rgba(255, 102, 0, 0.7)",
            zIndex: 1,
          }}
        ></div>

        {/* Text container: Dag + tagline + description */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "55%",
            padding: "60px 40px",
            display: "flex",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
       
          <div style={{ textAlign: "center", minWidth: "120px" }}>
            <div
              style={{
                fontSize: "3.2rem",
                fontWeight: "900",
                color: "#ff8c00",
                textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
              }}
            >
              Dag
            </div>
            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "10px",
                color: "#ddd",
                marginTop: "-6px",
                textTransform: "uppercase",
              }}
            >
           
            </div>
          </div>

        
          <div style={{ textAlign: "left", color: "white", maxWidth: "400px" }}>
            <h4
              style={{
                fontWeight: "600",
                color: "#ffe0b2",
                fontStyle: "italic",
                marginBottom: "10px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              Building Trust, Delivering Excellence
            </h4>
            <p
              style={{
                lineHeight: "1.5",
                color: "#fff3e0",
                textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Find your perfect home or investment opportunity with Dag — your reliable real estate partner across India.
            </p>
          </div>
        </div>



      </div>

      {/* Search Card Section (unchanged) */}
      <div className="container hero-search-box">
        <h1 className="mb-3 text-center">Find Your Dream Property</h1>
        <p className="mb-4 text-center">Search among hundreds of listings across the country.</p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
          <input
            type="text"
            placeholder="Enter location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Villa">Villa</option>
            <option value="Independent House">Independent House</option>
            <option value="Commercial">Commercial</option>
          </select>
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
