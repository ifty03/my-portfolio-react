import React from "react";
import { motion } from "framer-motion";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import "./AboutMe.css";
import Resume from "../Services/Ashikul-islam.pdf";

const AboutMe = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="about-main">
      <div className="about-container">
        <div className="text">
          <p>
            <span style={{ fontSize: "50px", fontWeight: "700" }}>Hello,</span>{" "}
            <span style={{ fontSize: "25px", fontWeight: "600" }}>
              I am Ashikul islam.
            </span>{" "}
            I am a student of Programming hero, Bangladesh. Though my hobby is
            building web based applications. Currently I am working as a MERN
            stack developer. Have some skills on HTML, CSS, React, JavaScript,
            ES6, React Component-base libraries such as React Router, React
            Bootstrap, Tailwind CSS, DaisyUI, Flowbite, Rechart, Carousels,
            Icons etc. I can do CRUD operations on MongoDB as per users demand.
            Got idea and knowledge about Node Js, Express Js, JWT, Netlify,
            Heroku, Git etc.
          </p>
          <a href={Resume} download>
            <button className="button" style={{ marginTop: "1rem" }}>
              Download Resume
            </button>
          </a>
        </div>
        {/* right image side */}
        <div className="i-right image">
          <img src={Vector1} alt="" />
          <img style={{ width: "700px" }} src={Vector2} alt="" />
          <img style={{ width: "350px" }} src={boy} alt="" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            <FloatinDiv img={thumbup} text1="MERN Stack" text2="Developer" />
          </motion.div>

          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
