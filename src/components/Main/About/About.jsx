import React from "react";

const About = () => {
  return <>
    <section id="sectionAbout">
      <div>
        <h2>Sobre mí</h2>
      </div>
      <div>
        <article>
          <div className="aboutDivImg">
            IMG
          </div>
          <div className="aboutDivTxt">
            <h3>Autodidacta</h3>
            <p>Me encanta aprender cosas nuevas y adaptarme a cualquier desafío.</p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            IMG
          </div>
          <div className="aboutDivTxt">
            <h3>Resolutiva</h3>
            <p>Me enfoco en encontrar soluciones eficientes de manera ágil y eficaz.</p>
          </div>
        </article>
        <article>
          <div className="aboutDivImg">
            IMG
          </div>
          <div className="aboutDivTxt">
            <h3>Trabajo en Equipo</h3>
            <p>
            Trabajo en equipo de manera eficiente, sumando ideas y aportando para lograr los objetivos comunes.</p>
          </div>
        </article>
      </div>
    </section>
  </>;
};

export default About;
