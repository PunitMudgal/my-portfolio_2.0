import React, { useState } from "react";
import "../styles/navbar.css";
// import { Link } from "react-router-dom";
import { FaGripVertical } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a className="navbar-logo" href="/">PUNIT SHARMA</a>

        <div className="navbar-content-list-pc">
          <a href="/">HOME</a>
          <a href="/">ABOUT</a>
          <a href="/">PROJECTS</a>
          <a href="/">CONTACT</a>
        </div>

        {/* for mobile */}
        <div className="navbar-mob">
        <FaGripVertical onClick={() => setNavbar(true)} size={23} />

        {navbar ? (
            <div className="navbar-content-mob">
              <VscChromeClose className="navbar-close-btn" onClick={() => setNavbar(false)} size={35} />
            <div className="navbar-content-list-mob">
              <a href="/">HOME</a>
              <a href="/">ABOUT</a>
              <a href="/">PROJECTS</a>
              <a href="/">CONTACT</a>
            </div>
          </div>
        ) : (
         null
        )}
        </div>
      </div>
   </div>
  );
}

export default Navbar;
