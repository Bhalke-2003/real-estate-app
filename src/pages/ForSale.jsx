import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ForSaleForm = ({ onSave }) => {
  const [form, setForm] = useState({
    apartmentType: '',
    bhkType: '',
    floor: '',
    totalFloor: '',
    propertyAge: '',
    facing: '',
    builtUpArea: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', form);
    if (onSave) onSave(form);
  };

  return (
    <Form className="p-3 bg-white shadow rounded" onSubmit={handleSubmit}>
      <h5 className="mb-4 text-danger">
        <span className="badge bg-danger me-2">1</span> Property Details
      </h5>

      <Form.Group className="mb-3">
        <Form.Label>Apartment Type*</Form.Label>
        <Form.Select name="apartmentType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Flat">Flat</option>
          <option value="Villa">Villa</option>
          <option value="Independent House">Independent House</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>BHK Type*</Form.Label>
        <Form.Select name="bhkType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4+ BHK">4+ BHK</option>
        </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>Floor*</Form.Label>
          <Form.Select name="floor" onChange={handleChange} required>
            <option value="">Select</option>
            {[...Array(30)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Total Floor*</Form.Label>
          <Form.Select name="totalFloor" onChange={handleChange} required>
            <option value="">Select</option>
            {[...Array(30)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Property Age*</Form.Label>
        <Form.Select name="propertyAge" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="New">New</option>
          <option value="0-1 Years">0-1 Years</option>
          <option value="1-5 Years">1-5 Years</option>
          <option value="5-10 Years">5-10 Years</option>
          <option value="10+ Years">10+ Years</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Facing</Form.Label>
        <Form.Select name="facing" onChange={handleChange}>
          <option value="">Select</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Built Up Area*</Form.Label>
        <Form.Control
          type="text"
          name="builtUpArea"
          placeholder="Built Up Area in sq ft"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit" className="w-100 btn btn-success">
        Save And Continue
      </Button>
    </Form>
  );
};

export default ForSaleForm;
