import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";

import "./LandingPage.css";
import ContactInfo from "./ContactInfo";

const LandingPage = () => {
  return (
    <div className="landing-content-wrapper">
      <div className="landing-title">
        <p>Hi, my name is Chris!</p>
      </div>
      <div className="landing-content">
        <p>I'm a Full Stack Developer living in Jersey City, NJ. I design and build mobile-first, responsive, and accessible web applications in the MERN Stack. I am constantly learning and experimenting with new and upcoming technologies. My current areas of interest include interaction design and design systems.</p>
        <div className="tech-icons">
          <FaReact /><span>React</span>
          <FaNodeJs /><span>Node</span>
          <FaHtml5 /><span>HTML5</span>
          <FaCss3 /><span>CSS3</span>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
}

export default LandingPage;