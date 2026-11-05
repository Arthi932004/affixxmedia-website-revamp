import React from "react";
import { FaShieldAlt, FaCheck } from "react-icons/fa";

function Terms() {

const sections = [
{
number: "01",
title: "Services",
text: "We provide digital marketing services including but not limited to:",
items: [
"Social Growth",
"Authority Growth",
"Video Production",
"Advertisements",
"Paid Growth",
"Influencer Marketing",
"Organic Growth",
"Affixx (DGT)",
"Website & App Development",
"Film Promotions",
"Short Form Content (UGC)"
]
},
{
number: "02",
title: "Client Responsibilities",
text: "Clients must provide accurate and timely information, access, and materials required to execute services. Delays due to client-side lapses are not our responsibility."
},
{
number: "03",
title: "Payments",
text: "All projects require advance payment as per the agreed proposal. Ongoing services will follow a monthly billing cycle unless otherwise stated."
},
{
number: "04",
title: "Intellectual Property",
text: "Unless otherwise agreed, all final deliverables are the client's property upon full payment. We reserve the right to showcase work for portfolio and promotional purposes."
},
{
number: "05",
title: "Confidentiality",
text: "We maintain strict confidentiality of all sensitive client data and project-related materials unless required by law."
},
{
number: "06",
title: "Limitations of Liability",
text: "We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use our services."
},
{
number: "07",
title: "Termination",
text: "We reserve the right to terminate services if a client breaches our terms, fails to make timely payments, or engages in unethical practice."
},
{
number: "08",
title: "Governing Law",
text: "These terms are governed by the laws of Puducherry / India."
}
];

return (
<> <style>{`


    .terms-page {
      background: #fff;
      color: #171717;
      overflow: hidden;
    }

    /* HERO SECTION */

    .terms-hero {
      background: #101010;
      padding: 145px 8% 110px;
      position: relative;
      overflow: hidden;
    }

    .terms-hero::before {
      content: "";
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: rgba(255,91,53,0.10);
      filter: blur(100px);
      right: -150px;
      top: -150px;
    }

    .terms-hero-content {
      max-width: 1150px;
      margin: auto;
      position: relative;
      z-index: 1;
    }

    .terms-label {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 4px;
      margin-bottom: 25px;
    }

    .terms-hero h1 {
      color: #fff;
      font-size: clamp(42px, 6vw, 76px);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 25px;
    }

    .terms-hero h1 span {
      color: #ff5b35;
    }

  .terms-hero p {
  color: #ccc;
  max-width: 550px;
  font-size: 17px;
  line-height: 1.9;
  text-align: center;
  margin: 0 auto;
}
.terms-breadcrumb {
  margin-top: 35px;
  font-size: 14px;
  color: #bbb;
  text-align: center;
}

    .terms-breadcrumb span {
      color: #ff5b35;
      margin: 0 12px;
    }

    /* MAIN CONTENT */

    .terms-main {
      max-width: 1150px;
      margin: auto;
      padding: 90px 25px;
    }

    /* INTRO */

    .terms-intro {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 50px;
      align-items: start;
      padding-bottom: 65px;
      border-bottom: 1px solid #e5e5e5;
    }

    .terms-intro-label {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .terms-intro h2 {
      font-size: 34px;
      font-weight: 800;
      line-height: 1.4;
      color: #171717;
      margin-top: 15px;
    }

    .terms-intro h2 span {
      color: #ff5b35;
    }

    .terms-intro p {
      color: #444;
      font-size: 17px;
      line-height: 2;
      margin: 0;
    }

    /* SECTION HEADING */

    .terms-heading {
      margin: 75px 0 35px;
    }

    .terms-heading > span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .terms-heading h2 {
      font-size: 40px;
      font-weight: 800;
      color: #171717;
      margin-top: 12px;
    }

    .terms-heading h2 span {
      color: #ff5b35;
      font-size: inherit;
      letter-spacing: 0;
    }

    /* TERMS LIST */

    .terms-list {
      border-top: 1px solid #e5e5e5;
    }

    .terms-item {
      display: grid;
      grid-template-columns: 75px 1fr;
      gap: 25px;
      padding: 40px 20px;
      border-bottom: 1px solid #e5e5e5;
      transition: 0.3s ease;
      align-items: start;
    }

    .terms-item:hover {
      background: #fff8f5;
      padding-left: 30px;
    }

    .terms-number {
      color: #ff5b35;
      font-size: 28px;
      font-weight: 800;
      text-align: left;
      padding-top: 0;
    }

    .terms-item-content {
  text-align: left;
  width: 100%;
}

.terms-item-content p {
  color: #333;
  font-size: 17px;
  line-height: 1.8;
  margin: 0;
  text-align: left;
  padding: 0;
}

    /* SERVICES */

    .terms-services {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 40px;
      row-gap: 14px;
      margin-top: 22px;
      max-width: 750px;
    }

    .terms-service {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.7;
      text-align: left;
    }

    .terms-service svg {
      color: #ff5b35;
      font-size: 13px;
      flex-shrink: 0;
    }

    /* BOTTOM NOTE */

    .terms-note {
      margin-top: 65px;
      background: #111;
      padding: 45px;
      display: flex;
      align-items: center;
      gap: 25px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }

    .terms-note::after {
      content: "";
      position: absolute;
      width: 180px;
      height: 180px;
      border: 1px solid rgba(255,91,53,0.3);
      border-radius: 50%;
      right: -50px;
      top: -70px;
    }

    .terms-note-icon {
      color: #ff5b35;
      font-size: 35px;
      flex-shrink: 0;
    }

    .terms-note h3 {
      color: #fff;
      font-size: 21px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .terms-note p {
      color: #ccc;
      font-size: 15px;
      line-height: 1.8;
      margin: 0;
    }

    /* RESPONSIVE */

    @media(max-width: 768px) {

      .terms-hero {
        padding: 115px 7% 75px;
      }

      .terms-main {
        padding: 60px 20px;
      }

      .terms-intro {
        grid-template-columns: 1fr;
        gap: 20px;
        padding-bottom: 40px;
      }

      .terms-intro h2 {
        font-size: 28px;
      }

      .terms-intro p {
        font-size: 16px;
      }

      .terms-heading {
        margin-top: 50px;
      }

      .terms-heading h2 {
        font-size: 32px;
      }

      .terms-item {
        grid-template-columns: 45px 1fr;
        gap: 15px;
        padding: 28px 5px;
      }

      .terms-number {
        font-size: 21px;
        text-align: left;
      }

      .terms-item-content h3 {
        font-size: 19px;
      }

      .terms-item-content p {
        font-size: 15px;
      }

      .terms-services {
        grid-template-columns: 1fr;
        row-gap: 10px;
      }

      .terms-service {
        font-size: 15px;
      }

      .terms-note {
        padding: 28px 22px;
        align-items: flex-start;
      }

      .terms-note h3 {
        font-size: 18px;
      }

    }

  `}</style>

  <div className="terms-page">

    {/* HERO */}

    <section className="terms-hero">

      <div className="terms-hero-content">

        <div className="terms-label">
          LEGAL INFORMATION
        </div>

        <h1>
          Terms & <span>Conditions.</span>
        </h1>

        <p>
          Please read our terms carefully to understand
          the guidelines and conditions for using
          AffixxMedia services.
        </p>

        <div className="terms-breadcrumb">
          Home <span>/</span> Terms & Conditions
        </div>

      </div>

    </section>

    {/* MAIN CONTENT */}

    <main className="terms-main">

      <section className="terms-intro">

        <div>

          <div className="terms-intro-label">
            WELCOME TO AFFIXXMEDIA
          </div>

          <h2>
            Clear Terms<br />
            Better <span>Partnerships</span>
          </h2>

        </div>

        <p>
          By accessing our website affixxmedia.com and
          using our services, you agree to the following
          terms and conditions. These terms outline the
          responsibilities and guidelines associated
          with our digital services.
        </p>

      </section>

      {/* TERMS LIST */}

      <div className="terms-heading">

        <span>OUR POLICIES</span>

        <h2>
          Terms of <span>Service</span>
        </h2>

      </div>

      <div className="terms-list">

        {sections.map((section) => (

          <section className="terms-item" key={section.number}>

            <div className="terms-number">
              {section.number}
            </div>

            <div className="terms-item-content">

              <h3>{section.title}</h3>

              <p>{section.text}</p>

              {section.items && (

                <div className="terms-services">

                  {section.items.map((item, index) => (

                    <div className="terms-service" key={index}>
                      <FaCheck />
                      <span>{item}</span>
                    </div>

                  ))}

                </div>

              )}

            </div>

          </section>

        ))}

      </div>

      {/* BOTTOM NOTE */}

      <div className="terms-note">

        <div className="terms-note-icon">
          <FaShieldAlt />
        </div>

        <div>

          <h3>Thank You for Choosing AffixxMedia</h3>

          <p>
            We appreciate your trust in our services.
            We are committed to maintaining transparency
            and building meaningful business relationships.
          </p>

        </div>

      </div>

    </main>

  </div>
</>


);
}

export default Terms;
