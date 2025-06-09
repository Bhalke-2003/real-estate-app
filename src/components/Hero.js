import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import bgImage from '../assets/house.jpg';
import { FaMicrophone, FaSearch } from 'react-icons/fa';



import './HeroSection.css';

const locationsList = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Nagpur', 'Kolkata', 'Ahmedabad'];

const Hero = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (location) queryParams.append('location', location);
    if (type) queryParams.append('type', type);
    navigate(`/search?${queryParams.toString()}`);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setLocation(transcript);
      filterLocations(transcript);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const filterLocations = (input) => {
    const results = locationsList.filter((loc) =>
      loc.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredLocations(input ? results : []);
  };

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocation(input);
    filterLocations(input);
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setFilteredLocations([]);
  };

  return (
    <div style={{
      position: 'relative',
      height: '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '20px',
    }}>
      {/* Blurred Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
        zIndex: 0,
      }}></div>

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      }}></div>

      {/* Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
        color: 'white',
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          lineHeight: '1.3',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
          marginBottom: '20px',
        }}>
          Find your perfect home or <br /> investment opportunity with DAG
        </h1>

        <p style={{
          fontSize: '1.4rem',
          fontWeight: '500',
          textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
          marginBottom: '35px',
        }}>
          Your reliable real estate partner across India.
        </p>

        {/* Search Box */}
        <div style={{
          display: 'flex',
          gap: '10px',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Location Input */}
          <div style={{ position: 'relative', flex: 2 }}>
            <input
              type="text"
              placeholder="Enter location"
              className="form-control"
              value={location}
              onChange={handleLocationChange}
              style={{
                paddingRight: '90px',
                backgroundColor: 'white',
                borderRadius: '40px',
                border: '1px solid #ccc',
                height: '45px',
                fontSize: '1rem',
                color: '#333',
              }}
            />
            <FaMicrophone
              onClick={handleVoiceInput}
              style={{
                position: 'absolute',
                right: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#1e3a8a',
                fontSize: '1.2rem',
              }}
            />
            <FaSearch
              onClick={handleSearch}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#1e3a8a',
                fontSize: '1.2rem',
              }}
            />
            {filteredLocations.length > 0 && (
             <ul
                className="autocomplete-suggestions"
                 style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderTop: 'none',
                  borderRadius:'40px',
                  zIndex: 10,
                  maxHeight: '200px',
                  overflowY: 'auto',
                  listStyle: 'none',
                  marginTop:'5px',
                  padding: 0,
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                  }}
                 >

                 {filteredLocations.map((suggestion) => (
                    <li
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{
                          cursor: 'pointer',
                          padding: '10px 12px',
                         
                          borderBottom: '1px solid #ddd',
                          transition: 'background-color 0.2s',
                          borderRadius: '40px',
                          color:'black'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#e0f2fe'; 
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#fff'; 
                        }}
                      >
                        {suggestion}
                    </li>
                  ))}
             </ul>
            )}
          </div>

          {/* Property Type Select */}
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              flex: 1,
              height: '45px',
              borderRadius: '40px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              backgroundColor: 'white',
              color: '#333',
            }}
          >
            <option value="">Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Villa">Villa</option>
            <option value="Independent House">Independent House</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;
