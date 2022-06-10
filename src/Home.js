import React from "react";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
