
import React, { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="nav-logo" onClick={closeMenu}>
        Affixx<span>Media</span>
      </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>

        <a href="/#about" onClick={closeMenu}>About</a>

        <a href="/#services" onClick={closeMenu}>Services</a>

        <a href="/#blog" onClick={closeMenu}>Blog</a>

        <Link to="/careers" onClick={closeMenu}>Careers</Link>

        <a href="/#contact" onClick={closeMenu}>Contact</a>

      </div>

      <a
        href="/#contact"
        className="nav-button"
        onClick={closeMenu}
      >
        Let's Talk <FaArrowRight />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default Navbar;
