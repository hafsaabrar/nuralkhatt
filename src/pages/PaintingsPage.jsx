import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function PaintingsPage() {
  const sendOrder = (productName, price) => {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I would like to order:\n*Product:* ${productName}\n*Price:* ${price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    { id: 1, title: "Noor-e-Quds", desc: "Spiritual serenity for your space.", price: "Rs. 4,000", img: "/images/painting1.jpg" },
    { id: 2, title: "Baitullah", desc: "Blessed artwork for your home.", price: "Rs. 5,000", img: "/images/painting2.jpg" },
    { id: 3, title: "Qubbat-us-Sakhra", desc: "Elegant calligraphy with gold textures.", price: "Rs. 5,000", img: "/images/painting3.jpg" },
  ];

  return (
    <div>
      <div className="collection-seamless-header">
        <Navbar />

        <section className="collection-banner-dark text-center">
          <div className="container">
            <h1 className="collection-title">Paintings</h1>
            <p className="collection-desc">Where strokes of devotion meet the canvas.</p>
          </div>
        </section>
      </div>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            {products.map((item) => (
              <div className="col-md-4 fade-in-up" key={item.id}>
                <div className="minimal-art-card text-center">
                  <div className="card-img-wrapper">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h4 className="card-title-new">{item.title}</h4>
                  <p className="card-text-new">{item.desc}</p>
                  <span className="minimal-price">{item.price}</span>
                  <button 
                    onClick={() => sendOrder(`${item.title} (Painting)`, item.price)} 
                    className="btn btn-outline-minimal w-100"
                  >
                    <i className="fab fa-whatsapp me-2"></i>Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}