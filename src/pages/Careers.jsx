import React, { useState } from "react";
import { FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";

function Careers() {

const [selectedJob, setSelectedJob] = useState(null);

const jobs = [
{
title: "Business Development Executive",
category: "Sales",
type: "Full-Time",
experience: "Fresher / Experienced",
location: "Pondicherry",
note: "Female candidates preferred - 2 nos"
},
{
title: "Social Media Manager",
category: "Marketing",
type: "Full-Time",
experience: "Fresher / Experienced",
location: "Pondicherry"
},
{
title: "Ads Manager",
category: "Performance",
type: "Full-Time",
experience: "Fresher / Experienced",
location: "Pondicherry"
},
{
title: "SEO Executive",
category: "Marketing",
type: "Full-Time",
experience: "Fresher / Experienced",
location: "Pondicherry"
}
];

const handleApply = (job) => {
const subject = encodeURIComponent(`Application for ${job.title}`);
const body = encodeURIComponent(
`Hello AffixxMedia Team,\n\nI am interested in applying for the ${job.title} position.\n\nPlease find my resume attached.\n\nThank you.`
);

window.location.href =
  `mailto:growth@affixxmedia.com?subject=${subject}&body=${body}`;


};

return (
<>


  <style>{`

    .careers-section {
      background: #f8f8f6;
      padding-bottom: 100px;
    }

    .careers-banner {
      background: #171717;
       max-height: 1150px;
      color: white;
      padding: 85px 8%;
      text-align: center;
    }

    .careers-banner h1 {
      font-size: 48px;
      margin-bottom: 18px;
       color: #e73333;
      
    }

    .careers-banner p {
      color: #aaa;
      font-size: 15px;
    }

    .careers-banner strong {
      color: #ff5b35;
    }

    .careers-breadcrumb {
      margin-top: 25px;
      font-size: 14px;
      color: #aaa;
    }

    .careers-breadcrumb span {
      color: #ff5b35;
      margin: 0 10px;
    }

    .careers-container {
      max-width: 1150px;
      margin: auto;
      padding: 80px 25px 0;
    }

    .careers-heading {
      text-align: center;
      margin-bottom: 50px;
    }

    .careers-heading > span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .careers-heading h2 {
      font-size: 42px;
      color: #171717;
      margin: 18px 0;
    }

    .careers-heading h2 strong {
      color: #ff5b35;
    }

    .careers-heading p {
      color: #777;
      font-size: 15px;
      line-height: 1.8;
    }

    .careers-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }

    .career-card {
      background: white;
      padding: 32px;
      border-radius: 16px;
      border: 1px solid #eee;
      transition: 0.3s;
    }

    .career-card:hover {
      transform: translateY(-7px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.07);
      border-color: #ff5b35;
    }

    .career-category {
      display: inline-block;
      background: #fff0eb;
      color: #ff5b35;
      padding: 7px 15px;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 18px;
    }

    .career-card h3 {
      color: #171717;
      font-size: 21px;
      margin-bottom: 12px;
    }

    .career-note {
      color: #777;
      font-size: 13px;
      margin-bottom: 18px;
    }

    .career-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin: 20px 0;
    }

    .career-meta span {
      display: flex;
      align-items: center;
      gap: 7px;
      color: #777;
      font-size: 13px;
    }

    .career-meta svg {
      color: #ff5b35;
    }

    .career-button {
      background: none;
      border: none;
      color: #ff5b35;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      padding: 10px 0;
    }

    .career-button:hover {
      gap: 16px;
    }

    .career-details {
      margin-top: 15px;
      padding-top: 18px;
      border-top: 1px solid #eee;
    }

    .career-details p {
      color: #666;
      font-size: 14px;
      line-height: 1.8;
      margin-bottom: 15px;
    }

    .career-apply {
      background: #ff5b35;
      color: white;
      border: none;
      padding: 12px 22px;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    .career-apply:hover {
      background: #171717;
    }

    .career-cta {
      margin-top: 90px;
      padding: 65px 35px;
      background: #171717;
      border-radius: 20px;
      text-align: center;
      color: white;
    }

    .career-cta > span {
      color: #ff5b35;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .career-cta h2 {
      color: #d7c8c8;
      font-size: 35px;
      margin: 20px 0;
      
      
    }

    .career-cta h2 strong {
      color: #ff5b35;
    }

    .career-cta p {
    
      color: #aaa;
      line-height: 1.8;
      max-width: 650px;
      margin: 0 auto 25px;
    }

    .career-email {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #ff5b35;
      color: white;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 30px;
      font-weight: 600;
      transition: 0.3s;
    }

    .career-email:hover {
      background: white;
      color: #171717;
    }

    @media (max-width: 768px) {

      .careers-banner h1 {
        font-size: 36px;
      }

      .careers-grid {
        grid-template-columns: 1fr;
      }

      .careers-heading h2 {
        font-size: 32px;
      }

      .career-cta h2 {

        font-size: 28px;
      }

    }

    @media (max-width: 480px) {

      .careers-banner {
        padding: 65px 6%;
      }

      .career-card {
        padding: 25px;
      }

      .career-meta {
        flex-direction: column;
        gap: 12px;
      }

    }

  `}</style>

  <section className="careers-section" id="careers">

    {/* Careers Banner */}

    <div className="careers-banner">

      <h1>
        Careers
      </h1>

      <p>
        Discover opportunities and grow with AffixxMedia.
      </p>

      

    </div>

    <div className="careers-container">

      {/* Current Openings */}

      <div className="careers-heading">

        <span>OPEN ROLES</span>

        <h2>
          Current <strong>Openings</strong>
        </h2>

        <p>
          We are immediately hiring for the roles below.
          Click on any role to view details and apply.
        </p>

      </div>

      {/* Job Cards */}

      <div className="careers-grid">

        {jobs.map((job, index) => (

          <div className="career-card" key={index}>

            <span className="career-category">
              {job.category}
            </span>

            <h3>{job.title}</h3>

            {job.note && (
              <p className="career-note">
                {job.note}
              </p>
            )}

            <div className="career-meta">

              <span>
                <FaBriefcase />
                {job.type}
              </span>

              <span>
                <FaClock />
                {job.experience}
              </span>

              <span>
                <FaMapMarkerAlt />
                {job.location}
              </span>

            </div>

            <button
              className="career-button"
              onClick={() =>
                setSelectedJob(
                  selectedJob === index ? null : index
                )
              }
            >
              {selectedJob === index
                ? "Hide Details"
                : "View Details & Apply"}

              <FaArrowRight />
            </button>

            {selectedJob === index && (

              <div className="career-details">

                <p>
                  Interested in this position?
                  Send your resume and a short introduction
                  to our recruitment team.
                </p>

                <button
                  className="career-apply"
                  onClick={() => handleApply(job)}
                >
                  Apply Now <FaArrowRight />
                </button>

              </div>

            )}

          </div>

        ))}

      </div>

      {/* Don't See Your Role */}

      <div className="career-cta">

        <span>JOIN OUR TEAM</span>

        <h2>
          Don't See Your Role?
          <br />
          <strong>Think You Belong Here Anyway?</strong>
        </h2>

        <p>
          We're always looking for exceptional talent.
          Send us your resume and tell us what you'd bring —
          we read every application.
        </p>

        <p>
          Drop us an email with your resume and a short
          note about yourself.
        </p>

        <a
          href="mailto:growth@affixxmedia.com?subject=Career%20Application"
          className="career-email"
        >
          Email Your Resume <FaArrowRight />
        </a>

      </div>

    </div>

  </section>

</>


);
}

export default Careers;
