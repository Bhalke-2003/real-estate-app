import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <h4>User Panel</h4>
      <ul>
        <li><Link to="/user/dashboard">Dashboard</Link></li>
        <li><Link to="/user/profile">Profile</Link></li>
        <li><Link to="/user/listings">My Listings</Link></li>
        <li><Link to="/user/favorites">Favorites</Link></li>
        <li><Link to="/user/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default UserSidebar;
