import React from 'react';
import './BuilderBanner.css';
import { FaTools } from 'react-icons/fa'; // FontAwesome tools icon

function BuilderBanner() {
  return (
    <div className="builder-banner-wrapper">
      <div className="scrolling-text">
        <FaTools className="icon" /> 120+ Trusted Builders Partnered with DAG
      </div>
    </div>
  );
}

export default BuilderBanner;
