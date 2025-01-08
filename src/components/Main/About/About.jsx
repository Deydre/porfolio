import React from "react";
import profilePhoto from "../../../assets/profile_deydre.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return <>
    <section id="sectionAbout">
      <div>
        <h3>Sobre mí</h3>
      </div>
      <div>
        <section id="aboutMeInnerSection1" className="aboutMeInnerSection">
          <article>
            <img src={profilePhoto} alt="Deydre sonriendo a cámara" />
            <h4>Deydre Alonso</h4>
            <div>
              <a href="mailto:deydrealonso@gmail.com" className="footerIcon"><MdEmail /></a>
              <a href="https://github.com/Deydre" target="_blank"><FaGithub className="footerIcon" /></a>
              <a href="https://www.linkedin.com/in/deydre/" target="_blank"><FaLinkedin className="footerIcon" /></a>
            </div>
          </article>
          <article>
            <p>Desarrolladora Fullstack con experiencia en diseño y gran pasión por el aprendizaje de nuevas tecnologías.</p>
            <p>Uniendo mis conocimientos de <strong>diseño web</strong> y <strong>desarrollo web</strong>, he encontrado la combinación perfecta entre <strong>creatividad y habilidades técnicas</strong> para crear soluciones completas y funcionales. </p>

            <p>Como desarrolladora Fullstack, aporto un enfoque integral que une <strong>estética y funcionalidad en cada proyecto.</strong></p>
          </article>
        </section>
      </div>
      <div>
        <section id="aboutMeInnerSection2" className="aboutMeInnerSection">
          <article>
            <div>
              <h6>MIS CUALIDADES</h6>
              <ul>
                <li>Autodidacta</li>
                <li>Resolutiva</li>
                <li>Detallista</li>
                <li>Creativa</li>
                <li>Disciplina</li>
                <li>Me adapto fácilmente</li>
              </ul>
            </div>
            <div>
              <h6>MIS OBJETIVOS</h6>
              <ul>
                <li>Nuevos retos</li>
                <li>Aprendizaje continuo</li>
                <li>Crecimiento profesional</li>
                <li>Aportar valor a proyectos reales</li>
              </ul>
            </div>
            <div>
              <h6>¿QUÉ PUEDO APORTAR?</h6>
              <ul>
                <li>Disciplina y responsabilidad</li>
                <li>Aprendizaje rápido</li>
                <li>Trabajo en equipo</li>
                <li>Trabajo rápido y eficaz</li>
                <li>Soluciones realistas centradas en el cliente</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
      {/* <div>
        <article>
          <div className="aboutDivImg">
            <img src="" alt="" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Autodidacta</h4>
            <p>Me encanta aprender <strong>nuevas tecnologías</strong> y <strong>adaptarme a cualquier desafío</strong>. 
            <br></br>Tengo fluidez y rapidez a la hora de <strong>aprender por mí misma</strong> o con la ayuda de otras personas.</p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            <img src="" alt="" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Trabajo en Equipo</h4>
            <p>
              Me integro bien en equipos <strong>aportando soluciones efectivas</strong>, enfrentándome a <strong>nuevos retos</strong> y creciento profesionalmente para <strong>lograr los objetivos comunes.</strong></p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            <img src="" alt="" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Resolutiva y detallista</h4>
            <p>Me enfoco en <strong>encontrar soluciones eficientes</strong> de manera ágil y eficaz, usando mi <strong>creatividad, mi rapidez</strong> y centrándome siempre en el cliente final.</p>
          </div>
        </article> 
      </div> */}
    </section>
  </>;
};

export default About;
