import React from "react";
import { Link } from "react-router-dom";
import pdf from "../utils/GASTON_CASTAGNERI_CV.pdf";
import "../assets/nav.css";

const NavContainer = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <p className="estilo-logo">GC </p>
          <h3 className="estilo-logo-nombre">Gastón Castagneri</h3>
        </Link>
      </div>
      <div className="nav-container ">
        <Link className="estilo-logo-nombre" to="/">
          <h3>Home</h3>
        </Link>
        <a href={pdf} download="CASTAGNERI_GASTON_CV.pdf">
          <h3 className="estilo-logo-nombre">CV</h3>
        </a>
        <Link className="estilo-logo-nombre" to="/work">
          <h3> Experiencia Laboral</h3>
        </Link>
        <Link className="estilo-logo-nombre" to="/about">
          <h3> Acerca de mí</h3>
        </Link>
        <a href="#contacto">
          <h3 className="estilo-logo-nombre">Contacto</h3>
        </a>
      </div>
    </nav>
  );
};

export default NavContainer;
