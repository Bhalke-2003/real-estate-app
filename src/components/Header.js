import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.css';
import LoginModal from './LoginModal'; 
const Header = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false); 

  const handlePostProperty = (type) => {
    navigate(`/postproperty?propertyType=${encodeURIComponent(type)}`);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">🏠 RealEstate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown
                title={
                  <span className="custom-post-btn">
                    Post Property <FaCaretDown className="caret-icon" />
                  </span>
                }
                id="post-property-dropdown"
                align="end"
                className="custom-post-dropdown"
              >
                <NavDropdown.Item onClick={() => handlePostProperty('For Sale: Houses and Apartments')}>
                  For Sale: Houses and Apartments
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handlePostProperty('For Rent: Houses and Apartments')}>
                  For Rent: Houses and Apartments
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handlePostProperty('Lands and Plots')}>
                  Lands and Plots
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handlePostProperty('For Rent: Offices and Shops')}>
                  For Rent: Offices and Shops
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handlePostProperty('For Sale: Offices and Shops')}>
                  For Sale: Offices and Shops
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handlePostProperty('PG and Guest Houses')}>
                  PG and Guest Houses
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/builder-info">Builder Info</Nav.Link>

              {/* ✅ Fix the login button to open modal */}
              <Nav.Link onClick={() => setShowLoginModal(true)}>Login/Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Show login modal if toggled */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Header;
