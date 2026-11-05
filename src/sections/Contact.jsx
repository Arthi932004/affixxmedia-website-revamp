import React from "react";
import {
FaArrowRight,
FaEnvelope,
FaPhone,
FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

const handleSubmit = (e) => {
e.preventDefault();
alert("Thank you! Your message has been submitted.");
e.target.reset();
};

return (
<> <style>{`


    .contact-section {
      padding: 100px 8%;
      background: #171717;
      color: white;
    }

    .contact-heading {
      text-align: center;
      margin-bottom: 60px;
    }

    .contact-heading span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .contact-heading h2 {
      font-size: 45px;
      color: white;
      margin: 20px 0;
    }

    .contact-heading h2 strong {
      color: #ff5b35;
    }

    .contact-heading p {
      color: #aaa;
      line-height: 1.8;
    }

    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 60px;
      align-items: start;
    }

    .contact-info h3 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .contact-info > p {
      color: #aaa;
      line-height: 1.8;
      margin-bottom: 35px;
    }

    /* ICON AND DETAILS ALIGNMENT */

    .contact-detail {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
    }

    .contact-detail svg {
      color: #ff5b35;
      font-size: 22px;
      min-width: 25px;
      flex-shrink: 0;
    }

    .contact-detail div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .contact-detail h4 {
      font-size: 16px;
      margin: 0 0 8px;
    }

    .contact-detail p {
      color: #ccc;
      font-size: 14px;
      line-height: 1.8;
      margin: 0;
    }

    .contact-detail a {
      color: #ccc;
      text-decoration: none;
      transition: 0.3s;
    }

    .contact-detail a:hover {
      color: #ff5b35;
    }

    /* CONTACT FORM */

    .contact-form {
      background: #252525;
      padding: 35px;
      border-radius: 18px;
      border: 1px solid #333;
    }

    .contact-form h3 {
      font-size: 25px;
      margin-bottom: 25px;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 16px;
      margin-bottom: 18px;
      border: 1px solid #444;
      border-radius: 8px;
      background: #171717;
      color: white;
      outline: none;
      font-size: 14px;
      font-family: inherit;
      box-sizing: border-box;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      border-color: #ff5b35;
    }

    .contact-form textarea {
      height: 130px;
      resize: vertical;
    }

    .contact-form button {
      background: #ff5b35;
      color: white;
      border: none;
      padding: 16px 25px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    .contact-form button:hover {
      background: white;
      color: #171717;
      transform: translateY(-3px);
    }

    /* RESPONSIVE DESIGN */

    @media (max-width: 768px) {

      .contact-section {
        padding: 70px 6%;
      }

      .contact-container {
        grid-template-columns: 1fr;
        gap: 35px;
      }

      .contact-heading h2 {
        font-size: 34px;
      }

      .contact-form {
        padding: 25px;
      }
    }

    @media (max-width: 480px) {

      .contact-heading h2 {
        font-size: 29px;
      }

    }

  `}</style>

  <section className="contact-section" id="contact">

    <div className="contact-heading">

      <span>GET IN TOUCH</span>

      <h2>
        Let's Build Something <strong>Great.</strong>
      </h2>

      <p>
        Have a project in mind? Let's discuss how we
        can help your business grow.
      </p>

    </div>

    <div className="contact-container">

      {/* CONTACT INFORMATION */}

      <div className="contact-info">

        <h3>Let's Talk About Your Project</h3>

        <p>
          We are ready to understand your goals and
          explore the right digital solutions for your business.
        </p>

        <div className="contact-detail">

          <FaEnvelope />

          <div>
            <h4>Email Us</h4>

            <p>
              <a href="mailto:growth@affixxmedia.com">
                growth@affixxmedia.com
              </a>
            </p>
          </div>

        </div>

        <div className="contact-detail">

          <FaPhone />

          <div>
            <h4>Call Us</h4>

            <p>
              <a href="tel:9363771010">
                +91 9363771010
              </a>
            </p>
          </div>

        </div>

        <div className="contact-detail">

          <FaMapMarkerAlt />

          <div>
            <h4>Visit Us</h4>

            <p>
              No 44, Pulsebay, 64, Subbiah Salai,
              (Opp to Pondicherry Railway Station),
              Pondicherry, 605001
            </p>
          </div>

        </div>

      </div>

      {/* CONTACT FORM */}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <h3>Send Us a Message</h3>

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          required
        />

        <textarea
          placeholder="Tell us about your project..."
          required
        />

        <button type="submit">
          Send Message <FaArrowRight />
        </button>

      </form>

    </div>

  </section>
</>


);
}

export default Contact;
