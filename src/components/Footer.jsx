import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #101010;
          color: white;
          padding: 65px 8% 25px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 45px;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .footer-logo span {
          color: #ff5b35;
        }

        .footer-about p {
  color: #999;
  font-size: 14px;
  line-height: 1.9;
  max-width: 350px;
  margin: 35px auto 0;
  text-align: center;
}

        .footer-column h3 {
          font-size: 17px;
          margin-bottom: 22px;
          
          text-align: center;
          
        }

        .footer-column ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.footer-column li {
  margin-bottom: 15px;
}

        .footer-column a {
          color: #999;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-column a:hover {
          color: #ff5b35;
        }

        .footer-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
}

        .footer-social a {
          width: 38px;
          height: 38px;
          background: #252525;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          transition: 0.3s;
        }

        .footer-social a:hover {
          background: #ff5b35;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: right;
          gap: 15px;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          color: #888;
          font-size: 13px;
          margin: 0;
        }

        /* Terms & Privacy Links */

        .footer-bottom a {
          color: #ff8b70;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
          animation: policyBlink 2s ease-in-out infinite;
        }

        .footer-bottom a:hover {
          color: #ff5b35;
          animation: none;
        }

        @keyframes policyBlink {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.55;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer">

        <div className="footer-container">

          {/* About Section */}

          <div className="footer-about">

            <div className="footer-logo">
              Affixx<span>Media.</span>
            </div>

            <h3>Powered by Humans, Perfected by AI</h3>

            <p>
              We create, optimise, and grow brands that lead
              the digital era. Because real growth starts when
              human creativity meets intelligent automation.
            </p>

            <div className="footer-social">

              <a href="#contact" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#contact" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#contact" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#contact" aria-label="Twitter">
                <FaTwitter />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h3>Our Services</h3>

            <ul>
              <li><a href="#services">Social Growth</a></li>
              <li><a href="#services">Authority Growth</a></li>
              <li><a href="#services">Organic Growth</a></li>
              <li><a href="#services">Paid Growth</a></li>
              <li><a href="#services">Media Growth</a></li>
              <li><a href="#services">Web Growth</a></li>
            </ul>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">

          <p>© 2026 AffixxMedia All Rights Reserved.</p>

          <p>
            <a href="/terms">Terms & Conditions</a>
          </p>

          <p>
            <a href="/privacy">Privacy Policy</a>
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;
