import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span style={{fontWeight:"700",fontFamily: "'Poppins', 'sans-serif'"}}>{heading}</span>
      <span style={{fontFamily: "'Poppins', 'sans-serif'",fontWeight:"600",fontSize:"15px",color:"gray"}}>{detail}</span>
      
    </div>
  );
};

export default Card;
