import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
//import './Register.css'; // Use your custom styling here

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
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
      const res = await axios.post('http://localhost:8080/api/user/register', formData);
      alert(`Success: ${res.data}`);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Error: ' + (err.response?.data || 'Registration failed.'));
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

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
            <Button type="submit" className="login-btn">Submit</Button>
          </div>
        </Form>
        <a href='/login'>Login !</a>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
