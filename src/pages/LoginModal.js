import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.role) newErrors.role = 'Please select a role';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/api/user/login', formData);
        const result = response.data;

        // Save data to localStorage
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          role: formData.role,
          token: result.token || 'dummy-token', // update if you return JWT later
        }));

        alert('Login successful!');

        // Redirect based on role
        if (formData.role === 'ADMIN') {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/home'); // change this to your user dashboard
        }

        onClose();
      } catch (error) {
        console.error('Login error:', error);
        alert('Invalid email or password');
      }
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              isInvalid={!!errors.role}
            >
              <option value="">Select Role</option>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button type="submit" className="login-btn">Login</Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <a href='/register'>Register here!</a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
