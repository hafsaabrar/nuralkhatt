import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto" data-aos="fade-up">
              
              <h1 className="about-main-title" data-aos="fade-down">Our Story</h1>
              
              <div className="story-block" data-aos="fade-up" data-aos-delay="100">
                <h4 className="story-heading">✨ The Journey from Ordinary to Extraordinary <br /><span className="story-year">The Spark (2023)</span></h4>
                <p className="story-text">It was an ordinary evening in 2023 when a notification flashed on my phone screen—a link from the Al-Madina Arabic Calligraphy Academy for a free course. At the time, I was in my first year of college, caught up in the usual routine of studies. I never imagined that a single link would pivot the entire direction of my life. I joined, introduced myself, and soon, my first set of tools arrived: five bamboo pens, five nibs, glossy sheets, and an inkpot.</p>
              </div>

              <div className="story-block" data-aos="fade-up" data-aos-delay="180">
                <h4 className="story-heading">🪵 The Trial of the Beginning</h4>
                <p className="story-text">The start was anything but easy. When I first held the pen, I didn't even know the correct grip. Critics were quick to chime in: <br /><em>"That’s not how you write!"</em> or <em>"If your hand sets in this wrong position, you'll never be able to fix your style."</em> Their words were discouraging, but I refused to give up. I spent three entire months just mastering the grip and the fundamental anatomy of the letters. That first "free batch" was my gateway into a world made of ink and soul.</p>
              </div>

              <div className="story-block" data-aos="fade-up" data-aos-delay="260">
                <h4 className="story-heading">🖋️ Finding the Soul in Thuluth</h4>
                <p className="story-text">Next, I began learning the Thuluth script. This was a difficult turning point. I was obsessed with making every letter "perfect," yet I constantly felt that my writing lacked "life." <br /><br />Then came a moment of clarity. I stopped focusing on the technicalities and immersed myself in the meaning of the Divine words I was writing. When I picked up the pen again, the ink didn't just flow on paper—it felt like it was flowing through my soul. The words weren't just marks of ink anymore; they glowed with an inner light. It was then I realized that calligraphy wasn't just art; it was a way to draw closer to my Creator.</p>
              </div>

              <div className="story-block" data-aos="fade-up" data-aos-delay="340">
                <h4 className="story-heading">🎨 From Paper to Canvas</h4>
                <p className="story-text">They say those who write the Word of God never lose heart. I moved on to the Naskh script, and slowly, my journey transitioned from simple glossy sheets to the vastness of the canvas. When I sold my first art piece, a new fire was lit within me. The path ahead was becoming more beautiful with every stroke.</p>
              </div>

              <div className="story-block" data-aos="fade-up" data-aos-delay="420">
                <h4 className="story-heading">🌟 A Mission Beyond Beauty</h4>
                <p className="story-text">Driven by this passion, I mastered the Kufic Qairawani script. Today, when I move my brush across a canvas, my goal isn't just aesthetic beauty. It is to deliver the Divine Word to His people in a unique and profound way. What started as a notification on a random evening has become my life's purpose.</p>
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