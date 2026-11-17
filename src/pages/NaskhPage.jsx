import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function NaskhPage() {
  // WhatsApp پر آرڈر بھیجنے کا فنکشن
  const sendOrder = (productName, price) => {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I would like to order:\n*Product:* ${productName}\n*Price:* ${price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Navbar />

      {/* Figma Style Charcoal Header Block */}
      <section className="collection-banner-dark text-center">
        <div className="container">
          <h1 className="collection-title">Khat-e-Naskh</h1>
          <p className="collection-desc">The classic script of clarity and elegance.</p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 justify-content-center">
            
            {/* Product 1: Surah Al-Qadr (Out of Stock) */}
            <div className="col-md-4 fade-in-up">
              <div className="minimal-art-card text-center">
                <div className="card-img-wrapper">
                  <img src="/images/naskh1.jpg" alt="Surah Al-Qadr" />
                </div>
                <h4 className="card-title-new">Surah Al-Qadr</h4>
                <p className="card-text-new">Traditional Naskh script on glossy sheet with calligraphy ink.</p>
                <span className="minimal-price">Rs. 1,800</span>
                <button className="btn btn-minimal-disabled w-100" disabled>
                  <i className="far fa-circle-xmark me-2"></i>Out of Stock
                </button>
              </div>
            </div>

            {/* Product 2: Surah Al Fatiha (Order Active) */}
            <div className="col-md-4 fade-in-up delay-1">
              <div className="minimal-art-card text-center">
                <div className="card-img-wrapper">
                  <img src="/images/naskh-art.jpg" alt="Surah Al Fatiha" />
                </div>
                <h4 className="card-title-new">Surah Al Fatiha</h4>
                <p className="card-text-new">Elegant readability focused composition, perfect for home.</p>
                <span className="minimal-price">Rs. 2,000</span>
                <button 
                  onClick={() => sendOrder('Surah Al Fatiha (Naskh)', 'Rs. 2,000')} 
                  className="btn btn-outline-minimal w-100"
                >
                  <i className="fab fa-whatsapp me-2"></i>Order on WhatsApp
                </button>
              </div>
            </div>

            {/* Product 3: Dua (Out of Stock) */}
            <div className="col-md-4 fade-in-up delay-1">
              <div className="minimal-art-card text-center">
                <div className="card-img-wrapper">
                  <img src="/images/naskh2.jpg" alt="Dua" />
                </div>
                <h4 className="card-title-new">Eternal Forgiveness</h4>
                <p className="card-text-new">Seeking divine grace for oneself, parents, and all believers.</p>
                <span className="minimal-price">Rs. 3,300</span>
                <button className="btn btn-minimal-disabled w-100" disabled>
                  <i className="far fa-circle-xmark me-2"></i>Out of Stock
                </button>
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