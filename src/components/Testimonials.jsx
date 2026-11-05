import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

function Testimonials() {

const reviews = [
{
name: "Swathiga Murugan",
company: "Rosemount Pre School",
role: "Director",
review:
"AffixxMedia’s creative ideas, videos, and designs boosted our school’s visibility and admissions remarkably. Truly grateful for their outstanding work!"
},
{
name: "Vivek",
company: "Pakkiri Pondy Mess",
role: "Founder",
review:
"AffixxMedia provided excellent branding and social media marketing support for my restaurant, greatly enhancing our reach and customer engagement."
},
{
name: "Vidjealatchoumy",
company: "Neela’s Sarees",
role: "Founder",
review:
"AffixxMedia has given Neela’s Sarees exceptional branding support and creative content strategy ideas that boosted our brand visibility and sales."
}
];

return (
<> <style>{`
.testimonials-section {
padding: 100px 8%;
background: #f8f8f6;
}


    .testimonial-heading {
      text-align: center;
      margin-bottom: 55px;
    }

    .testimonial-heading span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .testimonial-heading h2 {
      font-size: 43px;
      margin: 20px 0;
      color: #171717;
    }

    .testimonial-heading h2 strong {
      color: #ff5b35;
    }

    .testimonial-heading p {
      color: #777;
      line-height: 1.8;
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .testimonial-card {
      background: white;
      padding: 35px;
      border-radius: 18px;
      transition: 0.3s;
      border: 1px solid #eee;
    }

    .testimonial-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.07);
    }

    .testimonial-stars {
      display: flex;
      gap: 6px;
      color: #ffb52e;
      margin-bottom: 25px;
    }

    .testimonial-quote {
      color: #ff5b35;
      font-size: 25px;
      margin-bottom: 15px;
    }

    .testimonial-card > p {
      color: #666;
      font-size: 14px;
      line-height: 1.9;
      margin-bottom: 25px;
    }

    .testimonial-user h3 {
      color: #171717;
      font-size: 17px;
      margin-bottom: 5px;
    }

    .testimonial-user span {
      color: #888;
      font-size: 13px;
      display: block;
      margin-top: 5px;
    }

    .testimonial-company {
      color: #ff5b35 !important;
      font-weight: 600;
    }

    @media (max-width: 900px) {
      .testimonial-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .testimonial-grid {
        grid-template-columns: 1fr;
      }

      .testimonial-heading h2 {
        font-size: 32px;
      }
    }
  `}</style>

  <section className="testimonials-section" id="testimonials">

    <div className="testimonial-heading">

      <span>CLIENT TESTIMONIALS</span>

      <h2>
        What Our Clients <strong>Say.</strong>
      </h2>

      <p>
        Building relationships through creativity,
        trust and successful collaboration.
      </p>

    </div>

    <div className="testimonial-grid">

      {reviews.map((review, index) => (

        <div className="testimonial-card" key={index}>

          <div className="testimonial-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <FaQuoteRight className="testimonial-quote" />

          <p>{review.review}</p>

          <div className="testimonial-user">

            <h3>{review.name}</h3>

            <span className="testimonial-company">
              {review.company}
            </span>

            <span>{review.role}</span>

          </div>

        </div>

      ))}

    </div>

  </section>
</>


);
}

export default Testimonials;
