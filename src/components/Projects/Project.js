import React from "react";
import "./Project.css";
import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { img, name, date, uses, _id } = project;
  console.log(img);

  return (
    <div>
      <div class="first hero">
        <img class="hero-profile-img" src={img} alt="" />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <a
            href="https://www.linkedin.com/in/ashikul-islam-ifty-9587a5228/"
            target="_blank"
          >
            <img
              src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"
              alt=""
            />
          </a>
        </div>
        <div class="hero-description">
          <p
            style={{
              fontWeight: "600",
              fontSize: "25px",
              backgroundColor: "black",
              borderRadius: "20px 0px 20px 0px",
              padding: "5px 10px",
              fontFamily: "'Poppins', 'sans-serif'",
            }}
          >
            {name}
          </p>
        </div>
        <div class="hero-date">
          <p>{date}</p>
        </div>
        <div class="hero-btn">
          <Link className="link" to={`/project/${_id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
