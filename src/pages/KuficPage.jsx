import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function KuficPage() {
  const sendOrder = (productName, price) => {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I would like to order:\n*Product:* ${productName}\n*Price:* ${price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    { id: 1, title: "Ancestral Pattern", desc: "Hand-inked perfection on a premium glossy sheet.", size: "11×16", price: "Rs. 1,500", img: "/images/kufic1.jpg" },
    { id: 2, title: "Square Wisdom", desc: "Where ancient script meets a radiant glossy finish.", size: "11×16", price: "Rs. 1,500", img: "/images/kufic2.jpg" },
    { id: 3, title: "Kairouan Bloom", desc: "Glossy texture makes every stroke come to life.", size: "8×11", price: "Rs. 1,200", img: "/images/kufic3.jpg" },
    { id: 4, title: "Divine Geometry", desc: "Ancient calligraphy meets a high-gloss glow.", size: "11×16", price: "Rs. 1,500", img: "/images/kufic4.jpg" },
  ];

  return (
    <div>
      <div className="collection-seamless-header">
        <Navbar />

        <section className="collection-banner-dark text-center">
          <div className="container">
            <h1 className="collection-title">Khat Kufic Qirwani</h1>
            <p className="collection-desc">The Ancient Geometric Soul of Maghribi Calligraphy.</p>
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
                  <p className="card-size-text">Size: {item.size}</p>
                  <span className="minimal-price">{item.price}</span>
                  <button 
                    onClick={() => sendOrder(`${item.title} (Kufic)`, item.price)} 
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