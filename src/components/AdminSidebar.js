import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'; // optional styling

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h4>Admin Panel</h4>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/builders">Builder Info</Link></li>
        <li><Link to="/admin/sellers">Sellers</Link></li>
        <li><Link to="/admin/rentals">Rentals</Link></li>
      </ul>
    </div>
    
  );
};

export default AdminSidebar;