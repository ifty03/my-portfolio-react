import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="text-4xl font-semibold">ashikulislamifty@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/ifty03" target={"_blank"}> <BsGithub style={{fontSize:"50px",color:"white"}} /></a>
          <a href="https://www.linkedin.com/in/ashikul-islam-ifty/" target={"_blank"}><ImLinkedin2 style={{fontSize:"50px",color:"white"}} /></a>
          <a href="https://www.facebook.com/profile.php?id=100034520089054" target={"_blank"}><BsFacebook style={{fontSize:"50px",color:"white"}} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
