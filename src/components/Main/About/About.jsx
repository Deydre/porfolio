import React from "react";
import profilePhoto from "../../../assets/profile_deydre.png";

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
            <h3>Deydre Alonso</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae gravida est. Pellentesque sit amet mauris sed nibh fermentum consequat. In porta orci ut est ultrices, sit amet ultrices enim feugiat. Ut in lectus ac tortor suscipit viverra commodo eget lectus. Fusce finibus mi a tortor dapibus, sit amet scelerisque ipsum fermentum. Sed quam nisi, lacinia vitae tristique ut, commodo sit amet orci. Nunc pharetra, nisi convallis pulvinar molestie, mi lectus aliquam magna</p>
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
                <li>Enfrentarme nuevos retos</li>
                <li>Seguir aprendiendo</li>
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
