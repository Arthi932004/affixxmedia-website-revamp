import React from "react";
import {
  FaBullhorn,
  FaUserTie,
  FaSearch,
  FaChartLine,
  FaVideo,
  FaLaptopCode,
  FaArrowRight
} from "react-icons/fa";

import "./Services.css";

function Services() {

  const services = [
    {
      icon: <FaBullhorn />,
      title: "Social Growth",
      description: "Build your brand presence and connect with your audience through powerful social media strategies."
    },
    {
      icon: <FaUserTie />,
      title: "Authority Growth",
      description: "Build a strong professional identity and establish trust in your industry."
    },
    {
      icon: <FaSearch />,
      title: "Organic Growth",
      description: "Improve your search visibility and attract the right audience organically."
    },
    {
      icon: <FaChartLine />,
      title: "Paid Growth",
      description: "Reach potential customers through result-driven advertising campaigns."
    },
    {
      icon: <FaVideo />,
      title: "Media Growth",
      description: "Create engaging media campaigns that make your brand stand out."
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Growth",
      description: "Create modern websites that improve user experience and conversions."
    }
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-heading">

        <span>WHAT WE DO</span>

        <h2>
          Digital Services
          <br />
          Designed for <span>Growth.</span>
        </h2>

        <p>
          We combine creativity, strategy and technology
          to help businesses build a powerful digital presence.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">
              Explore More <FaArrowRight />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;