import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function CustomizedPage() {
  const sendOrder = (productName, price) => {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I would like to order:\n*Product:* ${productName}\n*Price:* ${price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    { id: 1, title: "Twilight Harmony", desc: "A beautiful fusion of customized calligraphy.", size: "8×6", price: "Rs. 1,400", img: "/images/customized1.jpg" },
    { id: 2, title: "Golden Verse", desc: "Sacred verses illuminated in elegant gold.", size: "18×24", price: "Rs. 4,000", img: "/images/customized2.jpg" },
    { id: 3, title: "Quadrant Faith", desc: "Four pillars of devotion, perfectly balanced.", size: "11×16", price: "Rs. 3,500", img: "/images/customized3.jpg" },
    { id: 4, title: "Midnight Echoes", desc: "Glossy texture makes every stroke come to life.", size: "8×11", price: "Rs. 3,200", img: "/images/customized4.jpg" },
    { id: 5, title: "Ethereal Aura", desc: "Modern abstraction meets timeless divine flow.", size: "11×16", price: "Rs. 3,800", img: "/images/customized5.jpg" },
    { id: 6, title: "Artful Identity", desc: "A custom-designed tribute reflecting grace and style.", size: "11×9", price: "Rs. 1,500", img: "/images/customized6.jpg" },
    { id: 7, title: "Divine Art", desc: "Graceful calligraphy tribute.", size: "12×48", price: "Rs. 5,500", img: "/images/customized7.jpg" },
  ];

  return (
    <div>
      <Navbar />

      {/* Figma Style Charcoal Header Block */}
      <section className="collection-banner-dark text-center">
        <div className="container">
          <h1 className="collection-title">Personalised Art</h1>
          <p className="collection-desc">Your words, uniquely crafted into art.</p>
        </div>
      </section>

      {/* Product Grid Section */}
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
                    onClick={() => sendOrder(`${item.title} (Customized)`, item.price)} 
                    className="btn btn-outline-minimal w-100"
                  >
                    <i className="fab fa-whatsapp me-2"></i>Request Customization
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