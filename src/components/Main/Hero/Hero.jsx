import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return <>
    <section id="hero">
      <article>
        <h4>Hola, soy</h4>
        <h1>Deydre</h1>
      </article>
      <article>
        <p><strong>Fullstack developer con una sólida formación en diseño y UI/UX.</strong></p>
      </article>
      <article>
        <FaGithub className="footerIcon" />
      </article>

    </section>
  </>;
};

export default Hero;
