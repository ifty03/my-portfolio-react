import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"22px"}} className="n-name">Andrew</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none",}}>
            <li style={{fontFamily: "'Poppins', 'sans-serif'"}}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li style={{fontFamily: "'Poppins', 'sans-serif'"}}>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li style={{fontFamily: "'Poppins', 'sans-serif'"}}>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li style={{fontFamily: "'Poppins', 'sans-serif'"}}>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li style={{fontFamily: "'Poppins', 'sans-serif'"}}>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
