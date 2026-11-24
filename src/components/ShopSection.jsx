import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    to: '/naskh-page',
    img: '/images/naskh-art.jpg',
    alt: 'Khat-e-Naskh',
    title: 'Khat e Naskh',
    desc: 'Elegant and readable classic script.',
    delay: 0,
  },
  {
    to: '/thuluth-page',
    img: '/images/thuluth-art.jpg',
    alt: 'Khat-ul-Thuluth',
    title: 'Khat ul Thuluth',
    desc: 'The king of arabic script.',
    delay: 120,
  },
  {
    to: '/kufic-page',
    img: '/images/kufic-art.jpg',
    alt: 'Khat Kufic Qirwani',
    title: 'Khat Kufic Qirwani',
    desc: 'Geometric and ancient script style.',
    delay: 240,
  },
  {
    to: '/paintings',
    img: '/images/painting1.jpg',
    alt: 'Paintings',
    title: 'Painting',
    desc: 'Modern islamic art piece.',
    delay: 100,
  },
  {
    to: '/customized',
    img: '/images/customized1.jpg',
    alt: 'Customized',
    title: 'Customized',
    desc: 'Customized for your space.',
    delay: 220,
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          {collections.map((item) => (
            <div
              key={item.to}
              className="col-md-4 col-sm-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="minimal-art-card text-center">
                <div className="card-img-wrapper">
                  <Link to={item.to}>
                    <img src={item.img} alt={item.alt} className="img-fluid" />
                  </Link>
                </div>
                <h4 className="card-title-new mt-3">{item.title}</h4>
                <p className="card-text-new">{item.desc}</p>
                <Link to={item.to} className="btn btn-outline-minimal">
                  View Collection <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}