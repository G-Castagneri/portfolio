import React from "react";
import GitHubIcon from "../utils/logos/github.svg";
import LinkedIn from "../utils/logos/linkedin.svg";
import Gmail from "../utils/logos/gmail.svg";
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
          <img src={GitHubIcon} width="50px" height="50px" />
        </a>

        <a
          href="https://www.linkedin.com/in/gaston-castagneri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} width="50px" height="50px" />
        </a>
        <a href="mailto:gaston.castagneri@gmail.com">
          <img src={Gmail} width="50px" height="50px" />
        </a>
      </div>
    </footer>
  );
};

export default FooterContainer;
