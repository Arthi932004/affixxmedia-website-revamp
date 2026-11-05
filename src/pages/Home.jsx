
import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

import ClientLogos from '../components/ClientLogos'
import MissionVision from '../components/MissionVision'
import CoreValues from '../components/CoreValues'
import Testimonials from '../components/Testimonials'

import About from '../sections/About'
import Services from '../sections/Services'
import Blog from '../sections/Blog'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'

function Home() {
  return (
    <>
      <style>{`

        .hero {
          min-height: 650px;
          padding: 90px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          background: #f8f8f6;
          overflow: hidden;
        }

        .hero-content {
          flex: 1;
        }

        .hero-tag {
          display: inline-block;
          background: #ffe7df;
          color: #ff5b35;
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .hero-content h1 {
          font-size: clamp(40px, 5vw, 65px);
          line-height: 1.15;
          font-weight: 800;
          color: #171717;
          letter-spacing: -2px;
        }

        .hero-content h1 span {
          color: #ff5b35;
        }

        .hero-content > p {
          max-width: 520px;
          color: #666;
          font-size: 16px;
          line-height: 1.8;
          margin: 25px auto 30px;
          text-align: center;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-primary {
          background: #ff5b35;
          color: white;
          padding: 16px 24px;
          border-radius: 35px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }

        .hero-primary:hover {
          background: #171717;
          transform: translateY(-3px);
        }

        .hero-secondary {
          color: #171717;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .hero-secondary svg {
          background: white;
          color: #ff5b35;
          padding: 13px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }

        .hero-stats {
          display: flex;
          gap: 55px;
          margin-top: 65px;
          flex-wrap: wrap;
        }

        .hero-stats h3 {
          font-size: 28px;
          color: #ff5b35;
          margin-bottom: 5px;
        }

        .hero-stats span {
          font-size: 13px;
          color: #777;
        }

        .hero-visual {
          flex: 1;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-circle {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: #ff5b35;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 70px rgba(255, 91, 53, 0.25);
          animation: float 4s ease-in-out infinite;
        }

        .hero-circle-inner {
          width: 270px;
          height: 270px;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .hero-circle-inner span {
          font-size: 12px;
          letter-spacing: 4px;
        }

        .hero-circle-inner h2 {
          font-size: 43px;
          line-height: 1.1;
          margin: 15px 0;
        }

        .floating-card {
          position: absolute;
          bottom: 55px;
          right: -10px;
          background: white;
          padding: 18px 22px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .floating-card > span {
          font-size: 30px;
          color: #ff5b35;
        }

        .floating-card h3 {
          font-size: 14px;
          margin-bottom: 5px;
        }

        .floating-card p {
          color: #888;
          font-size: 12px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @media (max-width: 768px) {

          .hero {
            flex-direction: column;
            padding: 70px 6%;
            text-align: center;
          }

          .hero-content {
            width: 100%;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 30px;
          }

          .hero-visual {
            width: 100%;
            min-height: 380px;
          }

          .hero-circle {
            width: 280px;
            height: 280px;
          }

          .hero-circle-inner {
            width: 220px;
            height: 220px;
          }

          .hero-circle-inner h2 {
            font-size: 35px;
          }

          .floating-card {
            right: 0;
            bottom: 15px;
          }

        }

        @media (max-width: 480px) {

          .hero-content h1 {
            font-size: 38px;
          }

          .hero-stats {
            gap: 20px;
          }

          .hero-stats h3 {
            font-size: 23px;
          }

        }

      `}</style>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            DIGITAL MARKETING AGENCY
          </span>

          <h1>
            Transform Your Brand
            <br />
            <span>Accelerate Growth</span>
          </h1>

          <p>
            We help ambitious businesses grow through creative
            strategies, powerful digital marketing and
            result-driven solutions.
          </p>

          <div className="hero-buttons">

            <a href="/services" className="hero-primary">
              Explore Our Services <FaArrowRight />
            </a>

            <a href="/about" className="hero-secondary">
              <FaPlay /> Discover More
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h3>360°</h3>
              <span>Digital Solutions</span>
            </div>

            <div>
              <h3>6+</h3>
              <span>Growth Services</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Growth Focused</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">

            <div className="hero-circle-inner">

              <span>GROW</span>

              <h2>
                YOUR<br />BRAND
              </h2>

              <span>WITH AFFIXXMEDIA</span>

            </div>

          </div>

          <div className="floating-card">

            <span>↗</span>

            <div>
              <h3>Growth Mindset</h3>
              <p>Think. Create. Grow.</p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <Services />

      {/* ABOUT SECTION */}
      <About />

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* MISSION AND VISION */}
      <MissionVision />

      {/* CORE VALUES */}
      <CoreValues />

      {/* BLOG SECTION */}
      <Blog />

      {/* PORTFOLIO SECTION */}
      <Portfolio />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* CONTACT SECTION */}
      <Contact />

    </>
  )
}

export default Home
