import React, { useContext } from "react";
import { context } from "../../../context/context"

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

  const { isDark } = useContext(context);



  return <>
    <section id="sectionSkills">
      <article>
        <h3>Skills</h3>
        <section>
          <aside>
            <p>Lenguajes</p>
          </aside>
          <article className="technologies">
            <div>
              {isDark === true
                ? <img src={javascriptLogoLight} alt="Javascript Logo" />
                : <img src={javascriptLogoDark} alt="Javascript Logo" />
              }
              <h5>Javascript</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={typescriptLogoLight} alt="Typescript Logo" />
                : <img src={typescriptLogoDark} alt="Typescript Logo" />
              }
              <h5>Typescript</h5>
            </div>
          </article>
        </section>
        <section>
          <aside>
            <p>Frontend</p>
          </aside>
          <article className="technologies">
            <div>
              {isDark === true
                ? <img src={reactLogoLight} alt="React Logo" />
                : <img src={reactLogoDark} alt="React Logo" />
              }
              <h5>React</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={sassLogoLight} alt="Sass Logo" />
                : <img src={sassLogoDark} alt="Sass Logo" />
              }
              <h5>Sass</h5>
            </div>
          </article>
        </section>
        <section>
          <aside>
            <p>Backend</p>
          </aside>
          <article className="technologies">
            <div>
              {isDark === true
                ? <img src={nodeLogoLight} alt="Node Logo" />
                : <img src={nodeLogoDark} alt="Node Logo" />
              }
              <h5>Node</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={expressLogoLight} alt="Express Logo" />
                : <img src={expressLogoDark} alt="Express Logo" />
              }
              <h5>Express</h5>
            </div>
          </article>
        </section>
        <section>
          <aside>
            <p>Bases de datos</p>
          </aside>
          <article className="technologies">
            <div>
              {isDark === true
                ? <img src={postgreSQLLogoLight} alt="PostgreSQL Logo" />
                : <img src={postgreSQLLogoDark} alt="PostgreSQL Logo" />
              }
              <h5>PostgreSQL</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={sequelizeLogoLight} alt="Sequelize Logo" />
                : <img src={sequelizeLogoDark} alt="Sequelize Logo" />
              }
              <h5>Sequelize</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={mongoDBLogoLight} alt="MongoDB Logo" />
                : <img src={mongoDBLogoDark} alt="MongoDB Logo" />
              }
              <h5>MongoDB</h5>
            </div>
            <div>
              {isDark === true
                ? <img src={mongooseLogoLight} alt="Mongoose Logo" className="mongo"/>
                : <img src={mongooseLogoDark} alt="Mongoose Logo" className="mongo"/>
              }
              <h5>Mongoose</h5>
            </div>
          </article>
        </section>
        <section>
          <aside>
            <p>Other Technologies</p>
          </aside>
          <article className="technologies">
            <div>
            {isDark === true
                ? <img src={gitLogoLight} alt="Git Logo" />
                : <img src={gitLogoDark} alt="Git Logo" />
              }
              <h5>Git</h5>
            </div>
            <div>
            {isDark === true
                ? <img src={githubLogoLight} alt="Github Logo" />
                : <img src={githubLogoDark} alt="Github Logo" />
              }
              <h5>GitHub</h5>
            </div>
            <div>
            {isDark === true
                ? <img src={renderLogoLight} alt="Render Logo" />
                : <img src={renderLogoDark} alt="Render Logo" />
              }
              <h5>Render</h5>
            </div>
            <div>
            {isDark === true
                ? <img src={netlifyLogoLight} alt="Netlify Logo" />
                : <img src={netlifyLogoDark} alt="Netlify Logo" />
              }
              <h5>Netlify</h5>
            </div>
          </article>
        </section>
      </article>
      <article>
        <h3>Trayectoria</h3>
      </article>
    </section>
  </>;
};

export default Projects;
