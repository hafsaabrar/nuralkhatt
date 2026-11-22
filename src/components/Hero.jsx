import React from 'react';

export default function Hero() {
  return (
    <header className="hero-section-new">
      <div className="container hero-container">
        
        <div className="hero-text-content">
          <h1 className="hero-heading">Elevate Your <br />Home Decor</h1>
          <p className="hero-subheading">Transform your living space into a sanctuary of style</p>
          <a href="#shop" className="btn-shop-now">Shop Now <span className="arrow">➔</span></a>
        </div>

        <div className="hero-graphic-canvas">
          <h3 className="collections-header-tag">Curated Collections</h3>
          
          <div className="art-circle-frame frame-top-left">
            <img src="/images/naskh-art.jpg" alt="Khat-e-Naskh Collection" />
          </div>

          <div className="art-circle-frame frame-center-low">
            <img src="/images/painting1.jpg" alt="Modern Islamic Art Piece" />
          </div>

          <div className="art-circle-frame frame-main-right">
            <img src="/images/thuluth-art.jpg" alt="Khat-ul-Thuluth Art Frame" />
          </div>
        </div>

      </div>
      
      <div className="hero-greek-border"></div>
    </header>
  );
}