import React from 'react';
import Hero from '../components/Hero';
import BuilderBanner from '../components/BuilderBanner';
import About from '../components/About';
import ServiceCard from '../components/ServiceCard';
import services from '../data/serviceData';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Hero />
      <BuilderBanner />

      {/* Updated Service Cards Section */}
      <section className="my-5">
        <Container>
          <h2 className="text-center mb-4">Explore Our Services</h2>
          <Row>
            {services.map((service) => (
              <Col key={service.id} md={6} lg={4} className="mb-4">
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      <About />
    </>
  );
};

export default Home;
