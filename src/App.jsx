import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

function Home() {
  return (
    <div>
      <div className="seamless-hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <ShopSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth 1-second luxury animation
      easing: 'ease-out-cubic', // Rich & soft deceleration
      once: true, // Ek baar scroll par animate ho (bar bar flicker na kare)
      offset: 80, // Screen mein 80px aane par start ho
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
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
    </ThemeProvider>
  );
}