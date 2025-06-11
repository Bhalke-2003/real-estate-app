import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-4">
            <h5>DAG</h5>
            <p>Your trusted partner in buying, selling, and renting properties across India.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/postproperty">Post Property</a></li>
              <li><a href="/builder-info">Builder Info</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Contact</h6>
            <p>Email: career@directadmissionguideline.com</p>
            <p>Phone: +91 9096174933</p>
            <p>Address: Pune, Maharashtra, India</p>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Follow Us</h6>
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">© {new Date().getFullYear()} DAG. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
