import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {

  const [gradient, setGradient] = useState("linear-gradient(140deg, rgb(175, 99, 255) 0%, rgba(0,255,176,1) 45%)");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hue1 = Math.floor((e.clientX / window.innerWidth) * 360);
      const hue2 = Math.floor((e.clientY / window.innerHeight) * 360);

      const pastelColor1 = `hsl(${hue1}, 70%, 80%) 0%`;
      const pastelColor2 = `hsl(${hue2}, 70%, 80%) 40%`;

      setGradient(`linear-gradient(140deg, ${pastelColor1}, ${pastelColor2})`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>
    <section id="hero">
      <article>
        <h4>Hola, soy</h4>
        <h1
          style={{
            "background-image": gradient,
          }}
        >Deydre</h1>
      </article>
      <article>
        <p>Fullstack developer con una sólida formación en diseño y UI/UX.</p>
      </article>
      <section>
        <article>
          <a href="mailto:deydrealonso@gmail.com">
            <button><MdEmail />Contacto</button>
          </a>
        </article>
        <article>
          <a href="https://github.com/Deydre" target="_blank"><FaGithub className="footerIcon" /></a>
          <a href="https://www.linkedin.com/in/deydre/" target="_blank"><FaLinkedin className="footerIcon" /></a>
        </article>
      </section>

    </section>
  </>;
};

export default Hero;
