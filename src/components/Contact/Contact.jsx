import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { HiOutlineMail } from 'react-icons/hi';
import { IoLogoLinkedin } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import toast from "react-hot-toast";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ygnn6s",
        "template_4jrrjjk",
        form.current,
        "6wvh8FFUB27LLLVVJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result?.text==="OK"){
            toast.success("Send your message successfully !")
            e.target.reset();
          }
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': '',fontFamily: "'Poppins', 'sans-serif'",fontSize:"45px"}}>Get in Touch</span>
          <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"40px"}}>Contact me</span>
          <div style={{display:"flex",alignItems:"center",gap:"6px",fontFamily: "'Poppins', 'sans-serif'",fontSize:"18px",marginTop:"10px"}}>
          <HiOutlineMail style={{fontSize:"23px",color:"blue"}}></HiOutlineMail> ashikulislamifty@gmail.com
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"6px",fontFamily: "'Poppins', 'sans-serif'",fontSize:"18px",marginTop:"10px"}}>
          <IoLogoLinkedin style={{fontSize:"23px",color:"blue"}}></IoLogoLinkedin>   <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/ashikul-islam-ifty/" target="_blank">https://www.linkedin.com/in/ashikul-islam-ifty/</a>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"6px",fontFamily: "'Poppins', 'sans-serif'",fontSize:"18px",marginTop:"10px"}}>
          <BsGithub style={{fontSize:"23px",color:"blue"}}></BsGithub>   <a style={{textDecoration:"none"}} href="https://github.com/ifty03" target="_blank">https://github.com/ifty03</a>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
