import React from "react";

function CoreValues() {
const values = [
{
image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
title: "Collaboration Wins",
description: "We believe anyone can succeed with the right team, and we strive to be that team for every client."
},
{
image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
title: "Integrity in Value",
description: "We welcome negotiation in strategies, never in the value we deliver."
},
{
image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
title: "Mutual Understanding",
description: "We understand our clients and help them clearly understand the process, goals and results."
},
{
image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
title: "Creative Clarity",
description: "We combine bold ideas with strategic focus because creativity without purpose is just noise."
},
{
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
title: "Results Matter",
description: "Our success is measured by the impact we create for our clients, not by vanity metrics."
},
{
image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&sat=-50",
title: "Transparency Always",
description: "We believe in open communication, honest feedback and earning trust through every interaction."
}
];

return (
<> <style>{`
.core-values {
padding: 100px 8%;
background: #f8f5f2;
color: #222;
}


    .values-heading {
      text-align: center;
      margin-bottom: 60px;
    }

    .values-heading span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .values-heading h2 {
      font-size: 42px;
      margin: 20px 0;
      color: #090808;
    }

    .values-heading h2 strong {
      color: #ff5b35;
    }

    .values-heading p {
      color: #666;
      line-height: 1.8;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .value-card {
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid #eee;
      transition: 0.3s;
      box-shadow: 0 5px 20px rgba(0,0,0,0.04);
    }

    .value-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    }

    .value-image {
      width: 100%;
      height: 220px;
      overflow: hidden;
    }

    .value-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s;
    }

    .value-card:hover .value-image img {
      transform: scale(1.08);
    }

    .value-content {
      padding: 28px;
    }

    .value-card h3 {
      font-size: 20px;
      margin-bottom: 14px;
      color: #222;
    }

    .value-card p {
      color: #777;
      font-size: 14px;
      line-height: 1.9;
      margin: 0;
    }

    @media (max-width: 900px) {
      .values-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .core-values {
        padding: 70px 6%;
      }

      .values-grid {
        grid-template-columns: 1fr;
      }

      .values-heading h2 {
        font-size: 30px;
      }
    }
  `}</style>

  <section className="core-values" id="values">
    <div className="values-heading">
      <span>OUR CORE VALUES</span>

      <h2>
        Strategic Steps to <strong>Real Results.</strong>
      </h2>

      <p>
        Our values guide every decision, every strategy
        and every relationship we build.
      </p>
    </div>

    <div className="values-grid">
      {values.map((value, index) => (
        <div className="value-card" key={index}>
          <div className="value-image">
            <img
              src={value.image}
              alt={value.title}
              loading="lazy"
            />
          </div>

          <div className="value-content">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
</>


);
}

export default CoreValues;
