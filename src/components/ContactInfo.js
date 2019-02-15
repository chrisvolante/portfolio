import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-title">
        <p>Say Hello!</p>
        <p>chrisvolante@pm.me</p>
        <p className="contact-icons">
          <a href="https://github.com/chrisvolante" target="_blank" rel="noopener noreferrer">
            <span><FaGithub />GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/christophervolante" target="_blank" rel="noopener noreferrer">
            <span><FaLinkedinIn />LinkedIn</span>
          </a>
        </p>
      </div>
      <div className="contact-content">
        <p>Let's discuss projects, events, etc.</p>
      </div>
    </div>
  );
}

export default ContactInfo;