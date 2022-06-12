import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { Link } from "react-scroll";
import Resume from "../Services/Ashikul-islam.pdf";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "",fontFamily: "'Poppins', 'sans-serif'", }}>Hey, I Am</span>
          <span style={{fontFamily: "'Poppins', 'sans-serif'",marginTop:"-17px"}}>Ashikul Islam</span>
          <span  style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"16px"}}>
          I'm a React JS developer. I always want to make a website good-looking. Always looking for new technology. I have a lot of interest in UI. That's why I learned to react to js to make a user satisfied.
I started learning to react a few months ago and I love using react on website because React is to be fast, scalable, and simple. It works only on user interfaces in the application.
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link> */}
        <a href={Resume} download>
            <button className="button" >
              Download Resume
            </button>
          </a>
        {/* social icons */}
        <div className="i-icons">
          
          <a href="https://github.com/ifty03" target={"_blank"}> <BsGithub style={{fontSize:"120px",color:"#5C5CFF"}} /></a>
          <a href="https://www.linkedin.com/in/ashikul-islam-ifty/" target={"_blank"}><ImLinkedin2 style={{fontSize:"130px",color:"#5C5CFF"}} /></a>
          <a href="https://www.facebook.com/profile.php?id=100034520089054" target={"_blank"}><BsFacebook style={{fontSize:"130px",color:"#5C5CFF"}} /></a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img style={{width:"700px"}} src={Vector2} alt="" />
        <img style={{width:"350px"}} src={boy} alt="" />
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

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
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
  );
};

export default Intro;
