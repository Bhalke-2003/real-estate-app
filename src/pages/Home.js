import React from 'react';
import Hero from '../components/Hero';
import BuilderBanner from '../components/BuilderBanner';
import About from '../components/About';
import ServicesPage from './ServicesPage';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Hero />
      <BuilderBanner />
      <ServicesPage />
      <About />
    </>
  );
};

export default Home;
