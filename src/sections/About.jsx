import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 8%;
          display: flex;
          align-items: center;
          gap: 70px;
          background: #f8f8f6;
        }

        .about-visual {
          flex: 1;
          position: relative;
        }

        .about-box {
          background: #ff5b35;
          color: white;
          padding: 55px 40px;
          min-height: 350px;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
        }

        .about-box span {
          font-size: 13px;
          letter-spacing: 3px;
        }

        .about-box h2 {
          font-size: 36px;
          margin-top: 35px;
          line-height: 1.3;
          position: relative;
          z-index: 2;
        }

        .about-decoration {
          position: absolute;
          right: 10px;
          bottom: -100px;
          font-size: 280px;
          font-weight: 900;
          opacity: 0.12;
        }

        .about-experience {
          position: absolute;
          right: -20px;
          bottom: -25px;
          background: white;
          padding: 22px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .about-experience h2 {
          color: #ff5b35;
          font-size: 30px;
        }

        .about-experience p {
          color: #777;
          font-size: 13px;
        }

        .about-content {
          flex: 1;
        }

        .about-label {
          color: #ff5b35;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .about-content h2 {
          font-size: 45px;
          line-height: 1.2;
          margin: 20px 0;
          color: #171717;
        }

        .about-content h2 span {
          color: #ff5b35;
        }

        .about-content > p {
          color: #777;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 25px;
        }

        .about-points {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 30px;
        }

        .about-points div {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: #333;
        }

        .about-points svg {
          color: #ff5b35;
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #171717;
          color: white;
          padding: 16px 25px;
          border-radius: 30px;
          font-weight: 600;
          transition: 0.3s;
        }

        .about-button:hover {
          background: #ff5b35;
        }

        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            padding: 70px 6%;
          }

          .about-visual,
          .about-content {
            width: 100%;
          }

          .about-content h2 {
            font-size: 35px;
          }
        }
      `}</style>

      <section className="about-section" id="about">

        <div className="about-visual">
          <div className="about-box">
            <span>ABOUT AFFIXX MEDIA</span>
            <h2>Ideas That Inspire. Strategies That Grow.</h2>
            <div className="about-decoration">A</div>
          </div>

          <div className="about-experience">
            <h2>360°</h2>
            <p>Digital Growth Solutions</p>
          </div>
        </div>

        <div className="about-content">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            We Turn Your
            <br />
            <span>Vision Into Reality.</span>
          </h2>

          <p>
            At AffixxMedia, we believe every brand has a unique
            story to tell. Our mission is to help businesses
            grow through creative thinking, innovative strategies
            and effective digital solutions.
          </p>

          <div className="about-points">
            <div><FaCheckCircle /> Creative Strategies</div>
            <div><FaCheckCircle /> Result-Driven Approach</div>
            <div><FaCheckCircle /> Customer-Focused Solutions</div>
          </div>

          <a href="#contact" className="about-button">
            Discover More <FaArrowRight />
          </a>
        </div>

      </section>
    </>
  );
}

export default About;