import React from "react";

import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-title">
        <p>Say Hello!</p>
        <p>chrisvolante@pm.me</p>
      </div>
      <div className="contact-content">
        <p>Let's discuss projects, events, etc.</p>
      </div>
    </div>
  );
}

export default ContactInfo;