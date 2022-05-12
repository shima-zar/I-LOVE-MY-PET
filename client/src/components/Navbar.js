import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar"></nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          I LOVE MY PET <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              LogIn
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/woof" className="nav-links" onClick={closeMobileMenu}>
              Woof
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/meow" className="nav-links" onClick={closeMobileMenu}>
              Meow
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/upload" className="nav-links" onClick={closeMobileMenu}>
              Upload
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">WooF</Button>}
        {button && <Button buttonStyle="btn--outline">MeoW</Button>}
      </div>
    </>
  );
}
export default Navbar;
