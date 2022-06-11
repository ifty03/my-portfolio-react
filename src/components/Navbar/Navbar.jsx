import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div>
          <NavLink  style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"22px",textDecoration:"none"}} className="n-name" to="/">Ashik</NavLink>
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none",}}>
           
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
        <NavLink to="/projects" className="p-route" >Projects</NavLink>
        <NavLink to="/Blogs" className="b-route" >Blogs</NavLink>
        <NavLink  to="/aboutMe">
        <button className="button n-button">About</button>
        </NavLink>
      </div>
    </div>
  );
};

export default navbar;
