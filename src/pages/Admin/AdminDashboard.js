import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties')
      .then(res => setAllProperties(res.data))
      .catch(err => console.error('Error fetching all properties:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Total Properties Listed: {allProperties.length}</h2>
    </div>
  );
};

export default AdminDashboard;
