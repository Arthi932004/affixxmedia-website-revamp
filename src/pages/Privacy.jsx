import React from "react";
import {
FaShieldAlt,
FaLock,
FaUserShield,
FaArrowRight
} from "react-icons/fa";

function Privacy() {

const sections = [
{
number: "01",
title: "Information We Collect",
description: "We may collect:",
items: [
"Contact information (name, email, phone, company)",
"Website usage data (cookies, IP addresses)",
"Inquiry or form responses"
]
},
{
number: "02",
title: "Use of Information",
description: "We use the information to:",
items: [
"Provide and improve our services",
"Respond to inquiries",
"Send updates, offers, and newsletters (only if opted in)"
]
},
{
number: "03",
title: "Data Sharing",
description: "We do not sell or share your data with third parties except:",
items: [
"To our service providers for operational purposes",
"When required by law"
]
},
{
number: "04",
title: "Cookies",
description: "We use cookies to improve website performance and user experience. You may disable cookies via browser settings."
},
{
number: "05",
title: "Data Security",
description: "We implement security measures to protect your data. However, no method is 100% secure."
},
{
number: "06",
title: "Your Rights",
description: "You may request access, correction, or deletion of your personal data by contacting us at"
},
{
number: "07",
title: "Changes to Policy",
description: "We may update this policy. Continued use of the site after changes indicates your acceptance."
}
];

return (
<> <style>{`


    .privacy-page {
      background: #fff;
      color: #171717;
      overflow: hidden;
    }

    /* HERO SECTION */

    .privacy-hero {
      background: #101010;
      padding: 145px 8% 110px;
      position: relative;
      overflow: hidden;
    }

    .privacy-hero::before {
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

    .privacy-hero-content {
      max-width: 1150px;
      margin: auto;
      position: relative;
      z-index: 1;
    }

    .privacy-label {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 4px;
      margin-bottom: 25px;
    }

    .privacy-hero h1 {
      color: #fff;
      font-size: clamp(42px, 6vw, 76px);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 25px;
    }

    .privacy-hero h1 span {
      color: #ff5b35;
    }

    .privacy-hero p {
      color: #ccc;
      max-width: 550px;
      font-size: 17px;
      line-height: 1.9;
      text-align: left;
    }

    .privacy-breadcrumb {
      margin-top: 35px;
      font-size: 14px;
      color: #bbb;
    }

    .privacy-breadcrumb span {
      color: #ff5b35;
      margin: 0 12px;
    }

    /* MAIN CONTENT */

    .privacy-main {
      max-width: 1150px;
      margin: auto;
      padding: 85px 25px;
    }

    /* INTRODUCTION */

    .privacy-intro {
      padding: 35px 40px;
      border-left: 4px solid #ff5b35;
      background: #fff8f5;
      margin-bottom: 75px;
    }

    .privacy-intro h2 {
      font-size: 30px;
      font-weight: 800;
      color: #171717;
      margin-bottom: 15px;
      text-align: left;
    }

    .privacy-intro .privacy-date {
      color: #ff5b35;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .privacy-intro p {
      color: #333;
      font-size: 17px;
      line-height: 1.9;
      margin-bottom: 0;
      text-align: left;
    }

    /* SECTION HEADING */

    .privacy-section-heading {
      margin-bottom: 35px;
    }

    .privacy-section-heading > span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .privacy-section-heading h2 {
      font-size: 40px;
      font-weight: 800;
      color: #171717;
      margin-top: 12px;
      text-align: left;
    }

    .privacy-section-heading h2 span {
      color: #ff5b35;
    }

    /* PRIVACY SECTIONS */

    .privacy-list {
      border-top: 1px solid #e5e5e5;
    }

    .privacy-item {
      display: grid;
      grid-template-columns: 75px 1fr;
      gap: 25px;
      padding: 38px 20px;
      border-bottom: 1px solid #e5e5e5;
      align-items: start;
      transition: 0.3s ease;
      text-align: left;
    }

    .privacy-item:hover {
      background: #fff8f5;
      padding-left: 30px;
    }

    .privacy-number {
      color: #ff5b35;
      font-size: 28px;
      font-weight: 800;
      text-align: left;
    }

    .privacy-content {
      width: 100%;
      text-align: left;
    }

    .privacy-content h3 {
      color: #171717;
      font-size: 23px;
      font-weight: 750;
      margin-bottom: 15px;
      text-align: left;
    }

    .privacy-content p {
      color: #333;
      font-size: 17px;
      line-height: 1.9;
      margin: 0;
      text-align: left;
    }

    .privacy-content ul {
      padding-left: 22px;
      margin-top: 15px;
      margin-bottom: 0;
    }

    .privacy-content li {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 2;
      padding-left: 3px;
      text-align: left;
    }

    /* EMAIL */

    .privacy-email {
      display: inline-block;
      color: #ff5b35;
      font-size: 17px;
      font-weight: 700;
      margin-top: 12px;
      text-decoration: none;
    }

    .privacy-email:hover {
      color: #171717;
    }

    /* RESPONSIVE */

    @media(max-width: 768px) {

      .privacy-hero {
        padding: 115px 7% 75px;
      }

      .privacy-main {
        padding: 60px 20px;
      }

      .privacy-intro {
        padding: 25px;
        margin-bottom: 55px;
      }

      .privacy-intro h2 {
        font-size: 25px;
      }

      .privacy-intro p {
        font-size: 15px;
      }

      .privacy-section-heading h2 {
        font-size: 30px;
      }

      .privacy-item {
        grid-template-columns: 45px 1fr;
        gap: 15px;
        padding: 28px 5px;
      }

      .privacy-number {
        font-size: 21px;
        text-align: left;
      }

      .privacy-content h3 {
        font-size: 20px;
      }

      .privacy-content p,
      .privacy-content li {
        font-size: 15px;
      }

    }

  `}</style>

  <div className="privacy-page">

    {/* HERO */}

    <section className="privacy-hero">

      <div className="privacy-hero-content">

        <div className="privacy-label">
          YOUR PRIVACY MATTERS
        </div>

        <h1>
          Privacy <span>Policy</span>
        </h1>

        <div className="privacy-breadcrumb">
          <a href="/" style={{ color: "#bbb", textDecoration: "none" }}>
            Home
          </a>
          <span>/</span>
          Privacy Policy
        </div>

      </div>

    </section>

    {/* MAIN CONTENT */}

    <main className="privacy-main">

      {/* INTRODUCTION */}

      <section className="privacy-intro">

        <h2>Privacy Policy</h2>

        <div className="privacy-date">
          October 31, 2025
        </div>

        <p>
          At Affixxmedia, we value your privacy.
          This policy explains how we collect, use,
          and protect your personal information.
        </p>

      </section>

      {/* SECTION HEADING */}

      <div className="privacy-section-heading">

        <span>DATA & PRIVACY</span>

        <h2>
          Privacy <span>Information.</span>
        </h2>

      </div>

      {/* ALL PRIVACY SECTIONS */}

      <div className="privacy-list">

        {sections.map((item) => (

          <section className="privacy-item" key={item.number}>

            <div className="privacy-number">
              {item.number}
            </div>

            <div className="privacy-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              {item.items && (

                <ul>
                  {item.items.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>

              )}

              {item.number === "06" && (

                <a
                  href="mailto:growth@affixxmedia.com"
                  className="privacy-email"
                >
                  growth@affixxmedia.com
                </a>

              )}

            </div>

          </section>

        ))}

      </div>

    </main>

  </div>
</>


);
}

export default Privacy;
