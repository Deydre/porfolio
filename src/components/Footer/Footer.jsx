import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return <footer>
    <p>Deydre Alonso Rosillo</p>
    <section>
      <article>
        <a href="mailto:deydrealonso@gmail.com">Contacto</a>
      </article>
      <article>
        <a href="https://github.com/Deydre" target="_blank"><FaGithub className="footerIcon" /></a>
        <a href="https://www.linkedin.com/in/deydre/" target="_blank"><FaLinkedin className="footerIcon" /></a>
      </article>
    </section>
  </footer>;
};

export default Footer;
