import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I have a few Dots around the house. One decided to have an attitude and she had to be replaced. Problem with voice recognition. I still pay the bills around here so she is not here any more!! HaHa!! I replaced her with the new Echo Dot 4th Gen in Blue. How pretty",
    },
    {
      img: profilePic2,
      review:
        "Much smaller than expected but the sound is phenomenal. I have almost every single version of the Echo and Echo dot in my house for an easy to use Spotify music setup to surround my upstairs with music but this little orb is the best sounding of the lot.",
    },
    {
      img: profilePic3,
      review:
        " Aesthetics. This is personal opinion of course, but I think I prefer the smaller, less noticeable shape of the previous models. This one is closer to a softball, and stands out much more. Sure it might be better for creating sound, but I don't use Dots for music listening anyway. .",
    },
    {
      img: profilePic4,
      review:
        "Price. The old Gen 3 Dot is now $10 cheaper than this version, and it is really hard for me to justify choosing this Gen 4. It really seems like you are just paying for the new shape and very slightly better sound, but that doesn't currently seem worth it to me. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"35px"}}>Clients always get </span>
        <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"35px"}}>Exceptional Work </span>
        <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"35px"}}>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper className="box"
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{fontFamily: "'Poppins', 'sans-serif'",fontSize:"16px"}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
