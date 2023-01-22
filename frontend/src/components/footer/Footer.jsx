import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaArrowAltCircleUp,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container_logo">
        <NavLink to="/">
          <img
            className="footer_logo"
            src="/src/assets/images/logo_sphereus.png"
            alt="sphereus"
          />
        </NavLink>
      </div>
      <div className="footer_social">
        <a href="https://www.instagram.com">
          <FaInstagramSquare className="footer_social_icon" />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebookSquare className="footer_social_icon" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitterSquare className="footer_social_icon" />
        </a>
      </div>
      <div className="footer_link">
        <div className="footer_link_url">
          <NavLink to="/policy">
            <p className="footer_link_url_txt">Privacy Policy</p>
          </NavLink>
          <NavLink to="/cookies">
            <p className="footer_link_url_txt">Cookies</p>
          </NavLink>
          <NavLink to="/termsofservices">
            <p className="footer_link_url_txt">Terms of Services</p>
          </NavLink>
        </div>

        <div className="footer_link_btn">
          <button
            type="button"
            className="btnToTop"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <FaArrowAltCircleUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
