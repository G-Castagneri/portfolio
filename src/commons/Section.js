import React from "react";
import { Link } from "react-router-dom";
import imagen from "../utils/foto.jpeg";
import "../assets/logos.css";
import "../assets/primer-article.css";
import "../assets/segundo-article.css";
import "../assets/tercer-article.css";
import "../assets/cuarto-article.css";
import pdf from "../utils/GASTON_CASTAGNERI_CV.pdf";

import { logos } from "../components/logos";

import { ArrowForwardIos } from "@material-ui/icons";

import Typewriter from "typewriter-effect";

const Section = () => {
  return (
    <section>
      <article>
        <div className="estilo-primer-article">
          <div className="texto-primer-article">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .pauseFor(100)
                  .typeString(
                    `<h1>
                ¡Hola a todos!
                <br /> Soy Gastón.
              </h1>
              <p>
                Bienvenido a mí porfolio, soy desarrollador de software, <br />
                vivo en Buenos Aires, Argentina.
                </p>`
                )
                  .start();
              }}
            />
          </div>
          <div className="estilo-mobile">
            <img src={imagen} />
          </div>
        </div>
        <div className="flecha">
          <div className="centrado">
            <a href="#work">
              <ArrowForwardIos className="estilo-flecha" />
            </a>
          </div>
        </div>
      
      </article>
      <article id="work">
        <div className="contenedor">
          <div className="estilo-resto-article">
            <h2>Experiencía Laboral</h2>
            <p>
              Cuento en detalle sobre la empresa que trabajé, los proyectos que
              realicé, colaboré y las tecnologías que utilicé.
            </p>
          </div>
          <div>
            <Link name="arriba" className="estilo-link" to="/work">
              <a name="arriba">Consulta mi experiencia laboral</a>
            </Link>
          </div>
        </div>
        <div className="flecha">
          <div className="centrado">
            <a href="#tecnologías">
              <ArrowForwardIos className="estilo-flecha" />
            </a>
          </div>
        </div>
      </article>
      <article id="tecnologías">
        <div className="estilo-resto-article estilo-texto-logos">
          <h2>Tecnologías con las que trabajo</h2>

          <div className="contenedor-logo">
            {logos.map((logo, i) => (
              <img id={`imagen-${i}`} src={logo}></img>
            ))}
          </div>
        </div>
        <div className="flecha">
          <div className="centrado">
            <a href="#sobre-mí">
              <ArrowForwardIos className="estilo-flecha" />
            </a>
          </div>
        </div>
      </article>
      <article>
        <div>
          <div className="estilo-resto-article">
            <h2 id="sobre-mí">Sobre mí</h2>
            <p>Aca te cuento acerca de mí, mis estudios y hobbies </p>
          </div>

          <div>
            <Link className="estilo-link" to="/about">
              <a>Conoce más sobre mí</a>
            </Link>

            <a
              href={pdf}
              download="CASTAGNERI_GASTON_CV.pdf"
              className="estilo-link"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section;
