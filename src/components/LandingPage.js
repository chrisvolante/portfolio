import React from "react";

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
      </div>
      <ContactInfo />
    </div>
  );
}

export default LandingPage;