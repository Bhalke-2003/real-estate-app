import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import BuilderInfo from './pages/BuilderInfo';
import LoginSignup from './pages/LoginSignup';
import SearchResults from './pages/SearchResults';
import PostProperty from './pages/PostProperty';
import ServicesPage from "./pages/ServicesPage"
import RentalList from './pages/RentalList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/builder" element={<BuilderInfo />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rental" element={<RentalList />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
