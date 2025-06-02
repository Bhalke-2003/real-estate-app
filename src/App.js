import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import BuilderInfo from './pages/BuilderInfo';
import LoginSignup from './pages/LoginSignup';
import SearchResults from './pages/SearchResults';
import PostProperty from './pages/PostProperty';

import 'bootstrap/dist/css/bootstrap.min.css';


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

      </Routes>

      <Footer />
    </>
  );
}

export default App;
