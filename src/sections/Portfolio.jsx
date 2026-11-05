import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Portfolio() {

  const projects = [
    {
      category: "SOCIAL MEDIA MARKETING",
      title: "Social Media Brand Growth",
      number: "01",
      color: "#ff5b35"
    },
    {
      category: "WEB DEVELOPMENT",
      title: "Modern Business Website",
      number: "02",
      color: "#252525"
    },
    {
      category: "DIGITAL MARKETING",
      title: "Digital Campaign Strategy",
      number: "03",
      color: "#edb84b"
    }
  ];

  return (
    <>
      <style>{`
        .portfolio-section {
          padding: 100px 8%;
          background: #ffffff;
        }

        .portfolio-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .portfolio-heading span {
          color: #ff5b35;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .portfolio-heading h2 {
          font-size: 45px;
          margin: 20px 0;
          color: #171717;
        }

        .portfolio-heading h2 strong {
          color: #ff5b35;
        }

        .portfolio-heading p {
          color: #777;
          line-height: 1.8;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .portfolio-card {
          border-radius: 18px;
          overflow: hidden;
          background: #f8f8f6;
          transition: 0.3s;
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .portfolio-image {
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .portfolio-number {
          position: absolute;
          top: 20px;
          left: 20px;
          color: white;
          font-size: 16px;
          font-weight: bold;
        }

        .portfolio-image h3 {
          color: white;
          font-size: 30px;
          text-align: center;
          padding: 20px;
        }

        .portfolio-info {
          padding: 25px;
        }

        .portfolio-info span {
          color: #ff5b35;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .portfolio-info h3 {
          font-size: 19px;
          margin: 12px 0;
          color: #171717;
        }

        .portfolio-info a {
          color: #171717;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
        }

        .portfolio-info a:hover {
          color: #ff5b35;
        }

        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-heading h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="portfolio-section" id="portfolio">

        <div className="portfolio-heading">

          <span>OUR PORTFOLIO</span>

          <h2>
            Creative Work.
            <strong> Real Impact.</strong>
          </h2>

          <p>
            Explore how creative thinking and digital strategies
            can help brands grow.
          </p>

        </div>

        <div className="portfolio-grid">

          {projects.map((project) => (

            <div className="portfolio-card" key={project.number}>

              <div
                className="portfolio-image"
                style={{ background: project.color }}
              >

                <span className="portfolio-number">
                  {project.number}
                </span>

                <h3>{project.title}</h3>

              </div>

              <div className="portfolio-info">

                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <a href="#contact">
                  Discuss Your Project <FaArrowRight />
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Portfolio;