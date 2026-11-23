import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/NAKLogo.jpg';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container custom-nav-container">
        <Link className="navbar-brand p-0 m-0" to="/">
          <img src={logoImg} alt="Nur Al Khatt Logo" className="logo-img" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center dynamic-nav-links">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><a className="nav-link" href="/#shop">Shop</a></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleDarkMode}
                aria-label="Toggle dark or light mode"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}