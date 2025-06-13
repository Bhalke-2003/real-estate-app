import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSidebar from './components/UserSidebar';
import UserDashboard from './pages/User/UserDashboard';
import UserProfile from './pages/User/UserProfile';
import RentalList from './pages/User/RentalList';
import SellerList from './pages/User/SellerList';
import UserSettings from './pages/User/UserSettings';
import './UserPanel.css';

const UserPanel = () => {
  return (
    <div className="user-panel">
      <UserSidebar />
      <div className="user-content">
        <Routes>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="listings" element={<RentalList />} />
          <Route path="buy" element={<SellerList />} />
          <Route path="settings" element={<UserSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserPanel;
