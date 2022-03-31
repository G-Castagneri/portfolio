import React from "react";
import gitHubIcon from "../utils/logos/github.svg";
import linkedIn from "../utils/logos/linkedin.svg";
import gmail from "../utils/logos/gmail.svg";
import "../assets/footer.css";

const FooterContainer = () => {
  return (
    <footer id="contacto">
      <div className="forma-geometrica"></div>
      <div className="centrado-img">
        <a
          href="https://github.com/G-Castagneri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubIcon} alt="Logo GitHub" width="50px" height="50px" />
        </a>
        <a
          href="https://www.linkedin.com/in/gaston-castagneri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="Logo LinkedIn" width="50px" height="50px" />
        </a>
        <a href="mailto:gaston.castagneri@gmail.com">
          <img src={gmail} alt="Logo Gmail" width="50px" height="50px" />
        </a>
      </div>
    </footer>
  );
};

export default FooterContainer;
