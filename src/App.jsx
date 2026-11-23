import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

import NaskhPage from './pages/NaskhPage';
import ThuluthPage from './pages/ThuluthPage';
import KuficPage from './pages/KuficPage';
import PaintingsPage from './pages/PaintingsPage';
import CustomizedPage from './pages/CustomizedPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import './App.css';

function Home({ darkMode, setDarkMode }) {
  return (
    <div>
      <div className="seamless-hero-wrapper">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
      </div>
      <ShopSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/naskh-page" element={<NaskhPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/thuluth-page" element={<ThuluthPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/kufic-page" element={<KuficPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/paintings" element={<PaintingsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/customized" element={<CustomizedPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<AboutPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/shippingpolicy" element={<ShippingPolicyPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </Router>
  );
}