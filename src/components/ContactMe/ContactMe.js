import React from "react";
import { Mail, Linkedin, Instagram, GitHub } from "react-feather";

import styles from "./ContactMe.module.css";

function ContactMe() {
  const handleEmailClick = () => {
    window.location.href = "mailto:nikheljha360@gmail.com";
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Contact Me</p>
      <div className={styles.links}>
        <a href="mailto:nikheljha360@gmail.com" onClick={handleEmailClick}>
          <Mail />
          nikheljha360@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/debapriya-jha-9a13ab222/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
          LinkedIn
        </a>
        <a href="https://www.instagram.com/nikhel60/" target="_blank" rel="noopener noreferrer">
          <Instagram />
          Instagram
        </a>
        <a href="https://github.com/DebapriyaJha" target="_blank" rel="noopener noreferrer">
          <GitHub />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
