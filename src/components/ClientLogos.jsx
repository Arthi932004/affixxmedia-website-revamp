import React from "react";

function ClientLogos() {

  const clients = [
    {
      name: "De Roman",
      image: "https://affixxmedia.com/image/brand/De-roman.png"
    },
    {
      name: "Guha Properties",
      image: "https://affixxmedia.com/image/brand/Guha-properties.png"
    },
    {
      name: "Neela's Sarees",
      image: "https://affixxmedia.com/image/brand/Neela's-saree.png"
    },
    {
      name: "Rosemount",
      image: "https://affixxmedia.com/image/brand/Rosemount.png"
    },
    {
      name: "Sea & Sky",
      image: "https://affixxmedia.com/image/brand/Sea-%26-Sky.png"
    }
  ];

  return (
    <>
      <style>{`
        .client-section {
          padding: 90px 8%;
          background: #121010b6;
          text-align: center;
        }

        .client-heading span {
          color: #ff5b35;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .client-heading h2 {
          font-size: 40px;
          margin: 20px 0;
          color: #f1e6e6;
        }

        .client-heading h2 strong {
          color: #ff5b35;
        }

        .client-heading p {
          color: #eddede;
          line-height: 1.8;
          max-width: 700px;
          margin: auto;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          margin-top: 55px;
        }

        .client-card {
          height: 130px;
          padding: 20px;
          border: 1px solid #e96363;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .client-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .client-card img {
          max-width: 100%;
          padding: 20px;
          border: 1px solid #e96363;
          max-height: 85px;
          object-fit: contain;
        }

        @media (max-width: 900px) {
          .client-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .client-heading h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="client-section" id="clients">

        <div className="client-heading">

          <span>OUR CLIENTS</span>

          <h2>
            Trusted by Businesses <strong>Who Demand Results.</strong>
          </h2>

          <p>
            We partner with ambitious brands to create
            meaningful digital experiences and measurable growth.
          </p>

        </div>

        <div className="client-grid">

          {clients.map((client, index) => (
            <div className="client-card" key={index}>

              <img
                src={client.image}
                alt={client.name}
                loading="lazy"
              />

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default ClientLogos;