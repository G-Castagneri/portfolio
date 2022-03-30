import React from "react";
import "../assets/about.css";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section>
      <article className="estilo-about">
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(20)
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
                  Eso cambió en 2020 cuando la pandemia puso en pausa mi carrera
                  profesional.
                  <br />
                  Es por eso que decidí introducirme a través de cursos
                  autodidactas, hasta que conocí PLATAFORMA 5, allí realicé un
                  curso introductorio de HTML, CSS, JAVASCRIPT.
                  <br />
                  Una vez finalizado este, me desafié en realizar un CODING
                  BOOTCAMP. Curso intensivo de más de 850 horas, en el cual
                  aprendí a utilizar las tecnologías más demandadas de la
                  industria.
                  <br />
                  Además de desarrollar habilidades técnicas, participé en
                  distintos proyectos grupales, desarrollando diferentes
                  habilidades blandas.
                  <br />
                  En mis tiempos libres trato de dedicarlo a mi familia y
                  amigos. Me encanta el fútbol, lo practico semanalmente.
                  También estudio inglés y sigo mi autodesarrollo en el campo de
                  IT para estar al día con las tedencias del mercado.
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
/* 
 <p>
        ¡Me encantan los aviones!, creo que cuando uno tiene la
        oportunidad de tenerlos tan cerca dificilmente no se enamore. Trabaje en la industria de la aviación durante 14 años. 
        
        ¡Descubri una nueva pasión Desarrollo de software!, si bien
        siempre tuve curiosidad nunca me habia dedicado por completo, eso cambio en
        2020 cuando la pandemia puso en pausa mi carrera profesional. Es por eso
        que decidí introducirme (me introduje) traves de cursos de forma autodidacta, hasta
        que conoci PLATAFORMA 5 y realice un curso introductorio de HTML, CSS,
        JAVASCRIPT una vez finalizado me desafié en realizar un BOOTCAMP de más
        de 850 horas, en el cual aprendí a utilizar las tecnologías más
        demandadas de la industria. Además de desarrollar habilidades técnicas,
        participe en distintos proyectos grupales desarrollando diferentes
        habilidades blandas. 
        
        En mis tiempos libres trato de dedicarlo a mi
        familia y amigos. Me encanta el futbol lo practico semanalmente!, ademas
        de disfrutar los videosjuegos y ver series. Tambien estudio idioma y
        sigo mi autodesarrollo en el campo de IT para estar al dia con las
        tedencias del mercado. 
        Me encuentro en busqueda de un puesto de tiempo
        completo en Desarrollo Web, donde pueda aplicar mis conocimientos y
        continuar creciendo profesionalmente.
      </p>

*/
