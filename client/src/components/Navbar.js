import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar"></nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          I LOVE MY PET <i className="fab fa-typo3"></i>
        </Link>
      </div>
    </>
  );
}
export default Navbar;
