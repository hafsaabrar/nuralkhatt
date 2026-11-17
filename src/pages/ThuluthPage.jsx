import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function ThuluthPage() {
  const sendOrder = (productName, price) => {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I would like to order:\n*Product:* ${productName}\n*Price:* ${price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    { id: 1, title: "Unwavering Hope", desc: "Thuluth composition beautifully finished on canvas.", size: "12×18", price: "Rs. 3,500", img: "/images/thuluth1.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 2, title: "Dawn Of Peace", desc: "Sacred verse bringing peace until the dawn.", size: "10×8", price: "Rs. 1,050", img: "/images/thuluth2.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 3, title: "Inner Peace", desc: "Intricate Jali Thuluth masterpiece on durable hard chart.", size: "18×20", price: "Rs. 3,200", img: "/images/thuluth3.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 4, title: "Sole Purpose", desc: "Beautifully crafted on an art pad for a refined look.", size: "12×8", price: "Rs. 1,900", img: "/images/thuluth4.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 5, title: "Heart's Anchor", desc: "Shining bright on a premium canvas.", size: "12×18", price: "Rs. 3,350", img: "/images/thuluth5.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 6, title: "Simply Blessed", desc: "Abstract Thuluth art, painted perfectly on canvas.", size: "8×10", price: "Rs. 1,000", img: "/images/thuluth6.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 7, title: "Sacred Veil", desc: "A spiritual tribute inspired by the elegance of the Kiswah.", size: "12×10", price: "Rs. 2,500", img: "/images/thuluth7.jpg", btnText: "Order on WhatsApp", btnClass: "btn btn-outline-minimal w-100" },
    { id: 8, title: "Infinite Radiance", desc: "Bold Quranic calligraphy elegantly painted on canvas.", size: "24×37", price: "Rs. 4,500", img: "/images/thuluth8.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 9, title: "Divine Provision", desc: "A beautiful reminder of Allah's endless blessings.", size: "4×4", price: "Rs. 600", img: "/images/thuluth9.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 10, title: "Eternal Praise", desc: "A timeless expression of gratitude and adoration.", size: "12×18", price: "Rs. 3,500", img: "/images/thuluth10.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 11, title: "Plea For Mercy", desc: "Powerful Quranic verse in deep blue textures.", size: "12×18", price: "Rs. 3,500", img: "/images/thuluth11.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 12, title: "The Twin Seas", desc: "Unique round artwork reflecting a divine miracles.", size: "8 inches", price: "Rs. 850", img: "/images/thuluth12.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 13, title: "Prayer For Parents", desc: "A beautiful Quranic prayer for our parents.", size: "9×7", price: "Rs. 900", img: "/images/thuluth13.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 14, title: "Whispers Of Peace", desc: "A tranquil reminder of peace until the break of dawn.", size: "10×8", price: "Rs. 1,050", img: "/images/thuluth14.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 15, title: "The Creative Word", desc: "Faith in the divine power that says \"Be\" and it is.", size: "7×5", price: "Rs. 750", img: "/images/thuluth15.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
    { id: 16, title: "Infinite Presence", desc: "A beautiful Thuluth script to bring hope into your home.", size: "11×9", price: "Rs. 1,150", img: "/images/thuluth16.jpg", btnText: "Request Customization", btnClass: "btn btn-outline-minimal w-100" },
  ];

  return (
    <div>
      <Navbar />

      {/* Figma Style Charcoal Header Block */}
      <section className="collection-banner-dark text-center">
        <div className="container">
          <h1 className="collection-title">Khat-ul-Thuluth</h1>
          <p className="collection-desc">The King of Scripts—Bold, Majestic, and Divine.</p>
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
                    onClick={() => sendOrder(`${item.title} (Thuluth)`, item.price)} 
                    className={item.btnClass}
                  >
                    <i className="fab fa-whatsapp me-2"></i>{item.btnText}
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