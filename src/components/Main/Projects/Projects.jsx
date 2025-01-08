import React, { useContext } from "react";
import { context } from "../../../context/context"

import imgPixelist from "../../../assets/porfolio_imgs/pixelist.png"
import imgChatbot from "../../../assets/porfolio_imgs/chatbot.png"
import imgJobOffers from "../../../assets/porfolio_imgs/jobOffers.png"

import { MdOpenInNew } from "react-icons/md";

import reactLogoLight from '../../../assets/logos/react.png';
import reactLogoDark from '../../../assets/logos/react_dark.png';
import sassLogoLight from '../../../assets/logos/sass.png';
import sassLogoDark from '../../../assets/logos/sass_dark.png';

import nodeLogoLight from '../../../assets/logos/nodejs.png';
import nodeLogoDark from '../../../assets/logos/nodejs_dark.png';
import expressLogoLight from '../../../assets/logos/expressjs.png';
import expressLogoDark from '../../../assets/logos/expressjs_dark.png';

import postgreSQLLogoLight from '../../../assets/logos/postgresql.png';
import postgreSQLLogoDark from '../../../assets/logos/postgresql_dark.png';

import pugLogoLight from '../../../assets/logos/pug.png';
import pugLogoDark from '../../../assets/logos/pug_dark.png';

import cssLogoLight from '../../../assets/logos/css.png';
import cssLogoDark from '../../../assets/logos/css_dark.png';



const Projects = () => {

  const { isDark } = useContext(context);

  return <section id="sectionProjects">
    <h3>Projects</h3>
    <div>
      <article id="gridOne">
        <img src={imgPixelist} alt="Captura de Pixelist" />
        <div>
          <div className="titleLogos">
            <h4>PIXELIST</h4>
            <ul>
              <li>
                {isDark
                  ? <img src={reactLogoLight} alt="Javascript Logo" className="logoMini" />
                  : <img src={reactLogoDark} alt="Javascript Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={sassLogoLight} alt="Sass Logo" className="logoMini" />
                  : <img src={sassLogoDark} alt="Sass Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={nodeLogoLight} alt="Node.js Logo" className="logoMini" />
                  : <img src={nodeLogoDark} alt="Node.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={expressLogoLight} alt="Express.js Logo" className="logoMini" />
                  : <img src={expressLogoDark} alt="Express.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={postgreSQLLogoLight} alt="PostgreSQL Logo" className="logoMini" />
                  : <img src={postgreSQLLogoDark} alt="PostgreSQL Logo" className="logoMini" />
                }
              </li>

            </ul>
          </div>
          <p>Web para filtrar juegos por categorías y ponerlos en favoritos. API externa para mostrar toda la información y API propia para guardar usuarios y sus favoritos.</p>
          <p>Proyecto personal individual para Bootcamp Fullstack.</p>
          <ul className="listInfo">
            <li>Sistema de login</li>
            <li>Sistema de favoritos</li>
            <li>API externa</li>
            <li>UI/UX</li>
            <li>Buscador</li>
          </ul>
          <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>
      <article id="gridTwo">
        <img src={imgChatbot} alt="Captura de Chatbot" />
        <div>
          <div className="titleLogos">
            <h4>CHATBOT FELGTBIQ</h4>
            <ul>
              <li>
                {isDark
                  ? <img src={reactLogoLight} alt="Javascript Logo" className="logoMini" />
                  : <img src={reactLogoDark} alt="Javascript Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={sassLogoLight} alt="Sass Logo" className="logoMini" />
                  : <img src={sassLogoDark} alt="Sass Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={nodeLogoLight} alt="Node.js Logo" className="logoMini" />
                  : <img src={nodeLogoDark} alt="Node.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={expressLogoLight} alt="Express.js Logo" className="logoMini" />
                  : <img src={expressLogoDark} alt="Express.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={postgreSQLLogoLight} alt="PostgreSQL Logo" className="logoMini" />
                  : <img src={postgreSQLLogoDark} alt="PostgreSQL Logo" className="logoMini" />
                }
              </li>

            </ul>
          </div>
          <p>Chatbot intuitivo y accesible que ofrece atención y orientación sobre el vih, además de estadísticas anonimizadas de las respuestas.</p>
          <p>Realizado junto con Data Science + Ciberseguridad.</p>
          <ul className="listInfo">
            <li>Sistema de formularios</li>
            <li>Sistema de login</li>
            <li>Librería de Chatbot</li>
            <li>UI/UX</li>
            <li>Cliente real</li>
          </ul>
          <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>
      <article id="gridThree">
        <img src={imgJobOffers} alt="Captura de Pixelist" />
        <div>
          <div className="titleLogos">
            <h4>FREELANCE <br></br>JOB OFFERS</h4>
            <ul>
              <li>
                {isDark
                  ? <img src={pugLogoLight} alt="Pug Logo" className="logoMini" />
                  : <img src={pugLogoDark} alt="Pug Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={cssLogoLight} alt="CSS Logo" className="logoMini" />
                  : <img src={cssLogoDark} alt="CSS Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={nodeLogoLight} alt="Node.js Logo" className="logoMini" />
                  : <img src={nodeLogoDark} alt="Node.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={expressLogoLight} alt="Express.js Logo" className="logoMini" />
                  : <img src={expressLogoDark} alt="Express.js Logo" className="logoMini" />
                }
              </li>
              <li>
                {isDark
                  ? <img src={postgreSQLLogoLight} alt="PostgreSQL Logo" className="logoMini" />
                  : <img src={postgreSQLLogoDark} alt="PostgreSQL Logo" className="logoMini" />
                }
              </li>
            </ul>

          </div>
          <p>Web para buscar trabajos como freelance mediante el uso de scrapping. Además, existe un rol admin donde se ueden crear ofertas de trabajo adicionales.</p>
          <p>Trabajo en equipo para Bootcamp Fullstack.</p>
          <ul className="listInfo">
            <li>Sistema de login + Google</li>
            <li>Scraping</li>
            <li>Sistema de favoritos</li>
            <li>UI/UX</li>
            <li>Buscador</li>
          </ul>
          <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>

    </div>
  </section>
};

export default Projects;
