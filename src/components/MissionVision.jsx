import React from "react";
import {
  FaBullseye,
  FaEye,
  FaArrowRight
} from "react-icons/fa";

function MissionVision() {
  return (
    <>
      <style>{`
        .mission-vision {
          padding: 100px 8%;
          background: #f8f8f8;
          color: #171717;
        }

        .mv-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .mv-heading span {
          color: #ff5b35;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .mv-heading h2 {
          font-size: 42px;
          margin: 18px 0;
        }

        .mv-heading h2 strong {
          color: #ff5b35;
        }

        .mv-heading p {
          color: #777;
          line-height: 1.8;
        }

        .mv-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .mv-card {
          background: white;
          padding: 45px;
          border-radius: 18px;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .mv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }

        .mv-icon {
          width: 65px;
          height: 65px;
          background: #fff0eb;
          color: #ff5b35;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 27px;
          margin-bottom: 25px;
        }

        .mv-card h3 {
          font-size: 27px;
          margin-bottom: 18px;
        }

        .mv-card p {
          color: #777;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 25px;
        }

        .mv-card a {
          color: #ff5b35;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .mission-vision {
            padding: 70px 6%;
          }

          .mv-container {
            grid-template-columns: 1fr;
          }

          .mv-heading h2 {
            font-size: 32px;
          }

          .mv-card {
            padding: 30px;
          }
        }
      `}</style>

      <section className="mission-vision" id="mission-vision">

        <div className="mv-heading">

          <span>OUR PURPOSE</span>

          <h2>
            Driven By Purpose. <strong>Focused On Growth.</strong>
          </h2>

          <p>
            Our mission and vision guide everything we create
            and every relationship we build.
          </p>

        </div>

        <div className="mv-container">

          <div className="mv-card">

            <div className="mv-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower brands by creating meaningful digital
              connections between businesses and consumers,
              driving growth, engagement and lasting relationships
              through innovative and impactful strategies.
            </p>

            <a href="#contact">
              Grow With Us <FaArrowRight />
            </a>

          </div>

          <div className="mv-card">

            <div className="mv-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be the most trusted and innovative digital
              partner for brands, transforming their online
              presence into powerful engines of influence,
              connection and success across the globe.
            </p>

            <a href="#contact">
              Let's Connect <FaArrowRight />
            </a>

          </div>

        </div>

      </section>
    </>
  );
}

export default MissionVision;