import React from "react";
import Typewriter from "typewriter-effect";
import "../assets/about.css";

const About = () => {
  return (
    <section>
      <article className="estilo-about">
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(15)
                .pauseFor(100)
                .typeString(
                  `
                  Soy una persona positiva, proactiva, que le gusta desafiarse
                  constantemente.
                  <br />
                  Me apasionan los Aviones, creo que cuando uno tiene la
                  oportunidad de verlos tan cerca, difícilmente no se enamore.
                  Trabajé en la industria de la aviación durante 14 años.
                  <br />
                  Si bien siempre tuve curiosidad por el Desarrollo de Software,
                  nunca me había dedicado por completo.
                  <br />
                  Eso cambió en 2020, cuando la pandemia puso en pausa mi carrera
                  profesional.
                  <br />
                  Es por eso que decidí introducirme a través de cursos
                  autodidactas, hasta que conocí PLATAFORMA 5, allí hice el
                  curso introductorio de HTML, CSS, JAVASCRIPT.
                  <br />
                  Una vez finalizado este, me desafié en realizar un CODING
                  BOOTCAMP. Curso intensivo de más de 850 horas, en el cual
                  aprendí a utilizar las tecnologías más demandadas de la
                  industria.
                  <br />
                  Además, de desarrollar habilidades técnicas, participé en
                  distintos proyectos grupales, desarrollando diferentes
                  habilidades blandas.
                  <br />
                  En mis tiempos libres trato de dedicarlo a mi familia y
                  amigos. Me encanta el fútbol, lo practico semanalmente.
                  Además, sigo mi autodesarrollo en el campo de
                  IT para estar al día con las tendencias del mercado.
                  <br />
                  Me encuentro en búsqueda de un puesto de tiempo completo en
                  Desarrollo Web, donde pueda aplicar mis conocimientos y
                  continuar creciendo profesionalmente.
                  `
                )

                .start();
            }}
          />
        </div>
      </article>
    </section>
  );
};

export default About;
