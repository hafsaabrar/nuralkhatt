import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/naskh-page" element={<NaskhPage />} />
        <Route path="/thuluth-page" element={<ThuluthPage />} />
        <Route path="/kufic-page" element={<KuficPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/customized" element={<CustomizedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/shippingpolicy" element={<ShippingPolicyPage />} />
      </Routes>
    </Router>
  );
}