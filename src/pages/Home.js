// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import BuilderBanner from '../components/BuilderBanner';
import FeaturedProperties from '../components/FeaturedProperties';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Hero />
      <BuilderBanner />
      <FeaturedProperties />
      <About />
    </>
  );
};

export default Home;
