import React from 'react';

export default function Hero() {
  return (
    <header className="hero-section-new">
      <div className="container hero-container">
        
        <div className="hero-text-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="hero-heading">Elevate Your <br />Home Decor</h1>
          <p className="hero-subheading" data-aos="fade-up" data-aos-delay="200">
            Transform your living space into a sanctuary of style
          </p>
          <a href="#shop" className="btn-shop-now" data-aos="fade-up" data-aos-delay="350">
            Shop Now <span className="arrow">➔</span>
          </a>
        </div>

        <div className="hero-graphic-canvas">
          <h3 className="collections-header-tag" data-aos="fade-down" data-aos-delay="150">
            Curated Collections
          </h3>
          
          <div className="art-circle-frame frame-top-left" data-aos="zoom-in" data-aos-delay="250">
            <img src="/images/naskh-art.jpg" alt="Khat-e-Naskh Collection" />
          </div>

          <div className="art-circle-frame frame-center-low" data-aos="zoom-in" data-aos-delay="400">
            <img src="/images/painting1.jpg" alt="Modern Islamic Art Piece" />
          </div>

          <div className="art-circle-frame frame-main-right" data-aos="zoom-in" data-aos-delay="550">
            <img src="/images/thuluth-art.jpg" alt="Khat-ul-Thuluth Art Frame" />
          </div>
        </div>

      </div>
      
      <div className="hero-greek-border"></div>
    </header>
  );
}