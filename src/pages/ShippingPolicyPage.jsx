import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logoImg from '../assets/NAKLogo.jpg';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function ShippingPolicyPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/NAKlogo.jpg" alt="Nur Al Khatt Logo" width="60" height="60" className="logo-img" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto dynamic-nav-links">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto fade-in-up delay-1">
              
              <h1 className="policy-main-title">Shipping Policy</h1>
              
              <div className="policy-block">
                <h4 className="policy-heading"><i className="fas fa-box-open me-2 text-dark"></i> Delivery Charges</h4>
                <ul className="list-group list-group-flush policy-list">
                  <li className="list-group-item bg-transparent px-0 border-0">
                    <strong>For Small Orders:</strong> <span className="text-muted">Rs. 300 - 400/-</span>
                  </li>
                  <li className="list-group-item bg-transparent px-0 border-0">
                    <strong>For Large Orders:</strong> <span className="text-muted">Rs. 500 - 600/-</span>
                  </li>
                </ul>
              </div>

              <div className="policy-block mt-4">
                <h4 className="policy-heading"><i className="fas fa-info-circle me-2 text-dark"></i> Order Tracking</h4>
                <p className="policy-text">Order dispatch hone ke baad aapko WhatsApp ke zariye update kar diya jayega. Agar delivery late ho, toh aap humse direct rabta kar sakte hain.</p>
              </div>
              
              <div className="text-start mt-5">
                <a href="/#shop" className="btn btn-outline-minimal">Back to Shop</a>
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