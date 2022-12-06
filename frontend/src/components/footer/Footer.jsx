import React from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer_logo"
        src="./src/assets/images/logo_sphereus.png"
        alt="sphereus"
      />
      <div className="footer_social">
        <FaInstagramSquare className="footer_social_icon" />
        <FaFacebookSquare className="footer_social_icon" />
        <FaTwitterSquare className="footer_social_icon" />
      </div>
      <div className="footer_link">
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>Terms of Services</p>
      </div>
    </div>
  );
}

export default Footer;
