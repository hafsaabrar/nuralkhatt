import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopSection() {
  return (
    <section id="shop" className="py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          
          <div className="col-md-4 col-sm-6 mb-4 fade-in-up delay-1">
            <div className="minimal-art-card text-center">
              <div className="card-img-wrapper">
                <Link to="/naskh-page">
                  <img src="/images/naskh-art.jpg" alt="Khat-e-Naskh" className="img-fluid" />
                </Link>
              </div>
              <h4 className="card-title-new mt-3">Khat e Naskh</h4>
              <p className="card-text-new">Elegant and readable classic script.</p>
              <Link to="/naskh-page" className="btn btn-outline-minimal">View Collection <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 fade-in-up delay-2">
            <div className="minimal-art-card text-center">
              <div className="card-img-wrapper">
                <Link to="/thuluth-page">
                  <img src="/images/thuluth-art.jpg" alt="Khat-ul-Thuluth" className="img-fluid" />
                </Link>
              </div>
              <h4 className="card-title-new mt-3">Khat ul Thuluth</h4>
              <p className="card-text-new">The king of arabic script.</p>
              <Link to="/thuluth-page" className="btn btn-outline-minimal">View Collection <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 fade-in-up delay-3">
            <div className="minimal-art-card text-center">
              <div className="card-img-wrapper">
                <Link to="/kufic-page">
                  <img src="/images/kufic-art.jpg" alt="Khat Kufic Qirwani" className="img-fluid" />
                </Link>
              </div>
              <h4 className="card-title-new mt-3">Khat Kufic Qirwani</h4>
              <p className="card-text-new">Geometric and ancient script style.</p>
              <Link to="/kufic-page" className="btn btn-outline-minimal">View Collection <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 fade-in-up delay-3">
            <div className="minimal-art-card text-center">
              <div className="card-img-wrapper">
                <Link to="/paintings">
                  <img src="/images/painting1.jpg" alt="Paintings" className="img-fluid" />
                </Link>
              </div>
              <h4 className="card-title-new mt-3">Painting</h4>
              <p className="card-text-new">Modern islamic art piece.</p>
              <Link to="/paintings" className="btn btn-outline-minimal">View Collection <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 fade-in-up delay-3">
            <div className="minimal-art-card text-center">
              <div className="card-img-wrapper">
                <Link to="/customized">
                  <img src="/images/customized1.jpg" alt="Customized" className="img-fluid" />
                </Link>
              </div>
              <h4 className="card-title-new mt-3">Customized</h4>
              <p className="card-text-new">Customized for your space.</p>
              <Link to="/customized" className="btn btn-outline-minimal">View Collection <span className="arrow">→</span></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}