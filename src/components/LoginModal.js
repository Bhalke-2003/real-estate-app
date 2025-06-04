import React, { useState } from 'react';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';

const LoginModal = ({ onClose }) => {
  const [key, setKey] = useState('mobile');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileError, setMobileError] = useState(''); // ✅ New state for error message

  const handleMobileLogin = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
      alert(`OTP sent to ${mobile}`);
    }
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login / Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="mobile" title="Mobile OTP">
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setMobileError(''); // Clear error while typing
                  }}
                  placeholder="Enter mobile number"
                  isInvalid={!!mobileError} // ✅ red border
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

              <Button variant="primary" onClick={handleMobileLogin}>Login via OTP</Button>
            </Form>
          </Tab>

          <Tab eventKey="email" title="Email/Password">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" onClick={() => alert('Login logic here')}>Login</Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
