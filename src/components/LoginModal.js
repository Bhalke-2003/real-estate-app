import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginModal.css';
// import CountryCodeInput from './CountryCodeInput';


const LoginModal = ({ onClose }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleMobileLogin = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
      alert(`OTP sent to ${mobile}`);
    }
  };

  return (
   <Modal show onHide={onClose} centered dialogClassName="custom-login-modal">

      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          <div style={{ fontWeight: 'bold', fontSize: '24px' }}>DAG</div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>Your Trusted Real Estate Partner</div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                setMobileError('');
              }}
              placeholder="Enter mobile number"
              isInvalid={!!mobileError}
            />
            <Form.Control.Feedback type="invalid">
              {mobileError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </Form.Group>
           <div className="d-flex justify-content-center">
          <Button  onClick={handleMobileLogin} className="login-btn">
            Login via OTP
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
