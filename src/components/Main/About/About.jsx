import React from "react";
import autodidactaImg from '../../../../public/autodidacta.png';
import detallistaImg from '../../../../public/detallista.png';
import equipoImg from '../../../../public/equipo.png';


const About = () => {
  return <>
    <section id="sectionAbout">
      <div>
        <h2>Sobre mí</h2>
      </div>
      <div>
        <article>
          <div className="aboutDivImg">
            <img src={autodidactaImg} alt="Libro abierto con estrellas" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Autodidacta</h4>
            <p>Me encanta aprender <strong>nuevas tecnologías</strong> y <strong>adaptarme a cualquier desafío</strong>. 
            <br></br>Tengo fluidez y rapidez a la hora de <strong>aprender por mí misma</strong> o con la ayuda de otras personas.</p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            <img src={equipoImg} alt="Dos amnos encajando piezas de puzzle" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Trabajo en Equipo</h4>
            <p>
              Me integro bien en equipos <strong>aportando soluciones efectivas</strong>, enfrentándome a <strong>nuevos retos</strong> y creciento profesionalmente para <strong>lograr los objetivos comunes.</strong></p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            <img src={detallistaImg} alt="Lápiz cohete" className="imgSobreMi" />
          </div>
          <div className="aboutDivTxt">
            <h4>Resolutiva y detallista</h4>
            <p>Me enfoco en <strong>encontrar soluciones eficientes</strong> de manera ágil y eficaz, usando mi <strong>creatividad, mi rapidez</strong> y centrándome siempre en el cliente final.</p>
          </div>
        </article>
        
      </div>
    </section>
  </>;
};

export default About;
