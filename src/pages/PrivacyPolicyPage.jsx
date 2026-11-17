import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/NAKlogo.jpg" alt="Nur Al Khatt Logo" width="60" height="60" className="logo-img" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto dynamic-nav-links">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 contact-card p-5 shadow-sm fade-in-up bg-white rounded">
              <h2 className="text-center mb-2">Privacy Policy</h2>
              <div className="title-underline"></div>

              <div className="mt-4">
                <p>Nur Al Khatt par aapka data hamari zimmedari hai. Hum aapki privacy ka mukammal ehtiram karte hain.</p>
                
                <h5 className="fw-bold mt-4">1. Information Collection</h5>
                <p>Hum sirf wahi maloomat mangte hain jo order delivery ke liye zaroori hoti hain (Jaise ke Name, Phone Number, aur Delivery Address).</p>

                <h5 className="fw-bold mt-4">2. Data Usage</h5>
                <p>Aapka data sirf order confirmation aur delivery ke liye istemal kiya jata hai. Hum aapki kisi bhi maloomat ko kisi teesray party (Third-party) ko farokht nahi karte.</p>

                <h5 className="fw-bold mt-4">3. Security</h5>
                <p>Aapki di gayi maloomat hamare paas mehfooz rehti hain. Hum digital aur manual dono tareeqon se aapke data ki hifazat yaqeeni banate hain.</p>
              </div>

              <div className="text-center mt-5">
                <a href="/" className="btn btn-outline-minimal">I Understand</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}