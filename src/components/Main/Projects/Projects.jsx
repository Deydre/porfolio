import React from "react";
import imgPixelist from "../../../assets/porfolio_imgs/pixelist.png"

import { MdOpenInNew } from "react-icons/md";

import javascriptLogoLight from '../../../assets/logos/javascript.png';
import javascriptLogoDark from '../../../assets/logos/javascript_dark.png';
import typescriptLogoLight from '../../../assets/logos/typescript.png';
import typescriptLogoDark from '../../../assets/logos/typescript_dark.png';

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
import sequelizeLogoLight from '../../../assets/logos/sequelize.png';
import sequelizeLogoDark from '../../../assets/logos/sequelize_dark.png';
import mongoDBLogoLight from '../../../assets/logos/mongoDB.png';
import mongoDBLogoDark from '../../../assets/logos/mongoDB_dark.png';
import mongooseLogoLight from '../../../assets/logos/mongoose.png';
import mongooseLogoDark from '../../../assets/logos/mongoose_dark.png';

import gitLogoLight from '../../../assets/logos/git.png';
import gitLogoDark from '../../../assets/logos/git_dark.png';
import githubLogoLight from '../../../assets/logos/github.png';
import githubLogoDark from '../../../assets/logos/github_dark.png';
import renderLogoLight from '../../../assets/logos/render.png';
import renderLogoDark from '../../../assets/logos/render_dark.png';
import netlifyLogoLight from '../../../assets/logos/netlify.png';
import netlifyLogoDark from '../../../assets/logos/netlify_dark.png';

const Projects = () => {
  return <section id="sectionProjects">
    <h3>Projects</h3>
    <div>
      <article>
        <img src={imgPixelist} alt="Captura de Pixelist" />
        <div>
          <h4>PIXELIST</h4>
          <p>Web para filtrar juegos por categorías y ponerlos en favoritos.</p>
          <ul>
            <li><img src={reactLogoLight} alt="" className="logoMini"/></li>
            <li><img src={sassLogoLight} alt="" className="logoMini"/></li>
            <li><img src={nodeLogoLight} alt="" className="logoMini"/></li>
            <li><img src={expressLogoLight} alt="" className="logoMini"/></li>
            <li><img src={postgreSQLLogoLight} alt="" className="logoMini"/></li>
          </ul>
           <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>
      <article>
        <img src={imgPixelist} alt="Captura de Pixelist" />
        <div>
          <h4>PIXELIST</h4>
          <p>Web para filtrar juegos por categorías y ponerlos en favoritos.</p>
          <ul>
            <li><img src={reactLogoLight} alt="" className="logoMini"/></li>
            <li><img src={sassLogoLight} alt="" className="logoMini"/></li>
            <li><img src={nodeLogoLight} alt="" className="logoMini"/></li>
            <li><img src={expressLogoLight} alt="" className="logoMini"/></li>
            <li><img src={postgreSQLLogoLight} alt="" className="logoMini"/></li>
          </ul>
           <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>
      <article>
        <img src={imgPixelist} alt="Captura de Pixelist" />
        <div>
          <h4>PIXELIST</h4>
          <p>Web para filtrar juegos por categorías y ponerlos en favoritos.</p>
          <ul>
            <li><img src={reactLogoLight} alt="" className="logoMini"/></li>
            <li><img src={sassLogoLight} alt="" className="logoMini"/></li>
            <li><img src={nodeLogoLight} alt="" className="logoMini"/></li>
            <li><img src={expressLogoLight} alt="" className="logoMini"/></li>
            <li><img src={postgreSQLLogoLight} alt="" className="logoMini"/></li>
          </ul>
           <button>Ver online <MdOpenInNew /></button>
        </div>
      </article>

    </div>
  </section>
};

export default Projects;
