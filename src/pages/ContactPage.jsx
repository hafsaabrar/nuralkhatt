import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "923365566580";
    const text = `*New Order / Inquiry*\n\n*Name:* ${formData.name}\n*Address:* ${formData.address}\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Navbar />

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 fade-in-up">
              <div className="contact-card p-4 shadow-lg bg-white rounded">
                <h2 className="section-title text-center mb-4">Contact For Orders</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="form-control" 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea 
                      id="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      className="form-control" 
                      rows="2" 
                      placeholder="Your delivery address" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Message / Order Details</label>
                    <textarea 
                      id="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="form-control" 
                      rows="4" 
                      placeholder="Which calligraphy style do you want?" 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-minimal w-100 py-2">
                    <i className="fab fa-whatsapp me-2"></i> Send to WhatsApp
                  </button>
                </form>
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