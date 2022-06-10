import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Ashikul-islam.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "",fontFamily: "'Poppins', 'sans-serif'",fontSize:"46px" }}>My Development</span>
        <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"41px"}}>Skills</span>
        <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"16px"}}>
          <p><span style={{fontWeight:"700"}}>Expertise: </span>HTML5, CSS3 Javascript , React js,  SPA, Bootstrap, Tailwind CSS,  <br /> React Router, Rest API </p>
          <p><span style={{fontWeight:"700"}}>Comfortable: </span>Node js, Express, MongoDB, Axios, <br /> Firebase, Stripe js</p>
          <p><span style={{fontWeight:"700"}}>Familiar: </span>React Native, Typescript, Next js, mongoose</p>
        </span>
        <a href={Resume} download>
          <button className="button" style={{marginTop:"3rem"}}>Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Expertise"}
            detail={"HTML5, CSS3 Javascript , React js, SPA, Bootstrap, Tailwind CSS,React Router, Rest API"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Comfortable"}
            detail={"Node js, Express, MongoDB, Axios, Firebase, Stripe js"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Familiar:"}
            detail={
              "React Native, Typescript, Next js, mongoose"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
