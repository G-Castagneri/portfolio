import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GitHubIcon from "../utils/github.svg";
import "../assets/work.css";
const Work = () => {
  return (
    <article className="estilo-work">
      <Timeline position="alternate">
        <div>
          <h1>DESARROLLO WEB</h1>
        </div>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="estilo-contenedor-tarjeta">
              <h2>Cruce App</h2>
              <h3>Dic 2021</h3>
              <p>
                Ecommerce - Aplicación web que permita la reserva de turnos para
                empresas con sucursales físicas - Proyecto de 5 personas.
              </p>
              <ul>
                <li>
                  Colaboré en el Backend con la creación y funcionalidad de
                  rutas, tablas, configuracion de JWT.
                  <br />
                  En el Frontend con Funcionalidad de Componentes y Estilos.
                </li>
              </ul>
              <ul>
                <li>
                  Tech Stack: Mongoose | Express.Js | React.Js | Node.Js | JWT |
                  Next.js | Semantic UI
                </li>
              </ul>
              <ul>
                <li>Herramienta de seguimiento: TRELLO</li>
              </ul>
              <ul>
                <li>Metodología Agil: SCRUM</li>
              </ul>

              <div className="work-img">
                <a
                  href="https://github.com/ger-s/cruce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHubIcon} width="50px" height="50px" />
                </a>
              </div>

              {/* <ul>
                <li>Funcionalidad:</li>
                <ul>
                  <li>Cliente</li>
                  <ul>
                    <li>
                      Login, editar contraseña, recuperación de contraseña
                    </li>
                    <li>Solicitud de reserva, edición y cancelación.</li>
                    <li>Comunicación vía email:</li>
                    <li>Confirmación de alta</li>
                    <li>Renovación de contraseña</li>
                    <li>Confirmación de reserva, edición o cancelación</li>
                    <li>Notificación de proximidad del turno, 24hs antes.</li>
                  </ul>
                  <br />
                  <li>Panel de reserva:</li>
                  <ul>
                    <li>Días y horarios disponibles</li>

                    <li>Realizar la reserva, editarla y cancelarla</li>
                    <li>
                      Contador para realizar la reserva hasta la confirmación
                    </li>
                    <li>
                      Disponibilidad crítica, en caso de tener poca
                      disponibilidad de turnos, indicar al cliente. Ejemplo:
                      últimos 2 turnos disponibles.
                    </li>
                  </ul>
                  <br />
                  <li>Sucursal / Operador</li>
                  <ul>
                    <li>
                      Visualización de reservas realizadas y confirmación de
                      asistencia
                    </li>
                    <li>
                      Panel con métricas de turnos (con filtro por fecha):
                    </li>
                    <li>Reservas vs asistencias</li>
                    <li>Días y horarios con mayor cantidad de reservas</li>
                  </ul>
                  <br />
                  <li>Admin</li>
                  <ul>
                    <li>Todas las funcionalidades Sucursal / Operador</li>
                    <li>Creación de sucursales y sus rangos horarios.</li>
                  </ul>
                </ul>
              </ul> */}
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="estilo-contenedor-tarjeta">
              <h2>Hello-World!</h2>
              <h3>Nov 2021</h3>
              <p>
                Ecommerce - Venta de cursos on line sobre Programación -
                Proyecto de 5 personas
              </p>
              <ul>
                <li>
                  Colaboré en el Frontend configuración de Redux, Funcionalidad,
                  Componentes y Estilos.
                </li>
              </ul>

              <ul>
                <li>
                  Tech Stack: PostgreSQL | Express.Js | React.Js | Node.Js |
                  Passport.Js. | Redux | React Bootstrap
                </li>
              </ul>
              <ul>
                <li>Herramienta de seguimiento: TRELLO</li>
              </ul>
              <ul>
                <li>Metodología Agil: SCRUM</li>
              </ul>
              <div className="work-img">
                <a
                  href="https://github.com/rotpando/hello-world"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHubIcon} width="50px" height="50px" />
                </a>
              </div>

              {/* <ul>
                <li>Funcionalidades:</li>

                <ul>
                  <li>Cliente</li>
                  <ul>
                    <li>Crear Usuario.</li>
                    <li>Buscar cursos y listarlos.</li>
                    <li>Previsualizar un curso.</li>

                    <li>
                      Comprar un curso y vincularlo automaticamente con el
                      usuario logueado.
                    </li>
                  </ul>
                  <br />
                  <li>Profesor</li>
                  <ul>
                    <li>Crear un nuevo curso</li>
                    <li>Editar un curso</li>
                    <li>Eliminar un curso</li>
                  </ul>
                  <br />
                  <li>Admin</li>{" "}
                  <ul>
                    <li>Administrar usuarios, eliminarlo o promoverlo</li>
                  </ul>
                </ul>
              </ul> */}
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="estilo-contenedor-tarjeta">
              <h2>Clone_OMDB</h2>
              <h3>Oct 2021</h3>
              <p>
                Página web de peliculas utilizando la API de OMDB - Proyecto
                individual
              </p>
              <ul>
                <li>
                  Tech Stack: PostgreSQL | Express.Js | React.Js | Node.Js |
                  Passport.Js | Redux | React Bootstrap
                </li>
              </ul>
              <ul>
                <li>Herramienta de seguimiento: TRELLO</li>
              </ul>
              <div className="work-img">
                <a
                  href="https://github.com/G-Castagneri/Clon_OMDB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHubIcon} width="50px" height="50px" />
                </a>
              </div>

              {/*  <ul>
                <li>Funcionalidad:</li>
                <ul>
                  <li>Poder ver los detalles de una película en particular.</li>
                  <br />
                  <li> Poder agregar una película a tu lista de favoritos.</li>
                  <br />
                  <li>Ver tu lista de películas favoritas.</li>
                  <br />
                  <li>Poder quitar películas de tu lista de favoritos.</li>
                  <br />
                  <li> Crear Usuarios</li>
                  <ul>
                    <li> Loggearse y desloguearse con un usuario.</li>
                    <li> Buscar películas y listarlas.</li>
                  </ul>
                </ul>
              </ul> */}
            </div>
          </TimelineContent>
        </TimelineItem>
        <div>
          <h1>LATAM AIRLINES</h1>
        </div>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="estilo-contenedor-tarjeta">
              <h2> ENCARGADO DE OPERACIONES EN PLATAFORMA</h2>
              <h3>Jun 2012 - Nov 2020</h3>
              <ul>
                <li>Coordiné un grupo de 15 personas.</li>
                <br />
                <li>
                  Trabajaba en equipo junto a otros grupos en la operación del
                  vuelo
                </li>
                <br />
                <li>
                  Estuve a cargo toda la operación en plataforma alrededor del
                  avión, siendo el responsable del proceso seguro de
                  abastecimiento de combustible y la seguridad tanto del
                  personal como de la aeronave.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="estilo-contenedor-tarjeta">
              <h2> AGENTE DE SERVICIO AL PASAJERO</h2>
              <h3>Mar 2007 - May 2012 </h3>
              <ul>
                <li>
                  Trabajé en el sector de equipajes, realizaba el reclamo, la
                  localización y recuperación del equipaje de los pasajeros
                  utilizando sistema Amadeus.
                </li>
                <br />
                <li>
                  Coordiné la logística para que el pasajero se encuentre
                  finalmente con su equipaje.
                </li>
                <br />
                <li>Entrenaba a nuevos miembros del equipo.</li>
              </ul>
              <br />
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </article>
  );
};

export default Work;

/* 




*/
