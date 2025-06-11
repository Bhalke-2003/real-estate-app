import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import BuilderInfo from './pages/BuilderInfo';
import LoginSignup from './pages/LoginModal';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';
import PostProperty from './pages/PostProperty';
import ServicesPage from "./pages/ServicesPage"
import RentalList from './pages/RentalList';
import AdminPanel from './AdminPannel';

import ForSaleForm from './pages/ForSale';
import ForSaleHousesForm from './pages/ForSaleHousesForm';
import ShopOfficeRentForm from './pages/ShopOfficeRentForm';
import ShopOfficeSaleForm from './pages/ShopOfficeSaleForm';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import Dashboard from './pages/Admin/Dashboard';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<BuilderInfo />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rental" element={<RentalList />} />
        <Route path="/post/rent" element={<ForSaleHousesForm />} />
        <Route path="/post/sale" element={<ForSaleForm />} />
        <Route path="/post/shop-rent" element={<ShopOfficeRentForm />} />
        <Route path="/post/shop-sale" element={<ShopOfficeSaleForm />} />
        <Route path="/post/builder" element={<BuilderInfo />} />
        
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
