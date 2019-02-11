import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";

import "./LandingPage.css";
import ContactInfo from "./ContactInfo";

const LandingPage = () => {
  return (
    <div className="landing-content-wrapper">
      <div className="landing-title">
        <p>Christopher Volante</p>
        <p>Full Stack Developer</p>
      </div>
      <div className="landing-content">
        <p>He designs and builds responsive web applications using the latest web technologies</p>
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