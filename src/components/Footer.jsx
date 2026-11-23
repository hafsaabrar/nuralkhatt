import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/NAKLogo.jpg';

export default function Footer() {
  return (
    <footer className="footer-section-new bg-white text-dark pt-5 pb-3 border-top fade-in-up">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={logoImg} alt="Nur Al Khatt Logo" width="80" height="80" className="logo-img mb-3" />
            <p className="footer-description text-muted">Elevating spaces with the divine beauty of Arabic Calligraphy. Handmade art delivered with care.</p>
          </div>
          <div className="col-md-3 offset-md-1 mb-4">
            <h5 className="footer-heading-title fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links-new">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#shop">Shop</a></li>
              <li><Link to="/shippingpolicy">Shipping Policy</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading-title fw-bold mb-3">Contact Us</h5>
            <p className="footer-contact-phone mb-0">
              <a
                href="https://wa.me/923365566580"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-phone-link"
              >
                <i className="fas fa-phone me-2"></i> +92 336 5566580
              </a>
            </p>
            <div className="social-icons-new mt-3">
              <a href="https://www.instagram.com/nuralkhatt_hafsa?dmpr=ejk5Y3R1NWpqYXNy" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href="https://www.facebook.com/share/1B1PrWY7Le/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="https://www.tiktok.com/@nuralkhatt?_r=1&_t=ZN-96yreiW2e6I" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok fa-lg"></i></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider-line mt-4 mb-3" />
        <div className="text-center text-muted">
          <p className="copyright-text mb-0">&copy; 2026 Nur Al Khatt. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}