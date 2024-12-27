import React, { useContext } from "react";
import { context } from "../../../context/context"
import reactLogoLight from '../../../assets/logos/react.png';
import reactLogoDark from '../../../assets/logos/react_dark.png';
import sassLogoLight from '../../../assets/logos/sass.png';
import sassLogoDark from '../../../assets/logos/sass_dark.png';

import nodeLogoLight from '../../../assets/logos/nodejs.png';
import nodeLogoDark from '../../../assets/logos/nodejs_dark.png';
import expressLogoLight from '../../../assets/logos/expressjs.png';
import expressLogoDark from '../../../assets/logos/expressjs_dark.png';

import postgreSQLLogoLight from '../../../assets/logos/postgreSQL.png';
import postgreSQLLogoDark from '../../../assets/logos/postgreSQL_dark.png';
import sequelizeLogoLight from '../../../assets/logos/sequelize.png';
import sequelizeLogoDark from '../../../assets/logos/sequelize_dark.png';
import mongoDBLogoLight from '../../../assets/logos/mongoDB.png';
import mongoDBLogoDark from '../../../assets/logos/mongoDB_dark.png';
import mongooseLogoLight from '../../../assets/logos/mongoose.png';
import mongooseLogoDark from '../../../assets/logos/mongoose_dark.png';

const Projects = () => {

  const { isDark } = useContext(context);



  return <>
    <section id="sectionSkills">
      <article>
        <h3>Skills</h3>
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
              <p>React</p>
            </div>
            <div>
              {isDark === true
                ? <img src={sassLogoLight} alt="Sass Logo" />
                : <img src={sassLogoDark} alt="Sass Logo" />
              }
              <p>Sass</p>
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
              <p>Node</p>
            </div>
            <div>
              {isDark === true
                ? <img src={expressLogoLight} alt="Express Logo" />
                : <img src={expressLogoDark} alt="Express Logo" />
              }
              <p>Express</p>
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
              <p>PostgreSQL</p>
            </div>
            <div>
            {isDark === true
                ? <img src={sequelizeLogoLight} alt="Sequelize Logo" />
                : <img src={sequelizeLogoDark} alt="Sequelize Logo" />
              }
              <p>Sequelize</p>
            </div>
            <div>
            {isDark === true
                ? <img src={mongoDBLogoLight} alt="MongoDB Logo" />
                : <img src={mongoDBLogoDark} alt="MongoDB Logo" />
              }
              <p>MongoDB</p>
            </div>
            <div>
            {isDark === true
                ? <img src={mongooseLogoLight} alt="Mongoose Logo" />
                : <img src={mongooseLogoDark} alt="Mongoose Logo" />
              }
              <p>Mongoose</p>
            </div>
          </article>
        </section>
        <section>
          <aside>
            <p>Frontend</p>
          </aside>
          <article className="technologies">
            <div>
              <p>Img</p>
              <p>React</p>
            </div>
            <div>
              <p>Img</p>
              <p>Sass</p>
            </div>
            <div>
              <p>Img</p>
              <p>React</p>
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
