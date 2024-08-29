import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="logo">
          <Link to="/">finsweet</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbarr;
