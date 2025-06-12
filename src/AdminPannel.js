import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import BuilderInfo from './pages/Admin/BuilderInfo';
import Sellers from './pages/Admin/SellerList';
import Rentals from './pages/Admin/RentalList';
import './AdminPannel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AdminSidebar />
      <div className="admin-content">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="builders" element={<BuilderInfo />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="rentals" element={<Rentals />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
