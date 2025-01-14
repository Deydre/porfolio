import React, { useState, useEffect, useContext } from "react";
import { context } from "../../../context/context";
import cv from "../../../../src/assets/CV_2025_Deydre_Alonso.pdf";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {

  const [gradient, setGradient] = useState("linear-gradient(140deg, rgb(175, 99, 255) 0%, rgba(0,255,176,1) 45%)");
  const { isDark } = useContext(context);

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
          style={
            isDark
              ? { backgroundImage: gradient }
              : { backgroundImage: "linear-gradient(0deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)" }
          }
        >
          Deydre
        </h1>
      </article>
      <article>
        <p>Fullstack developer con una sólida formación en diseño y UI/UX.</p>
      </article>
      <section>
        <article>
          <a href={cv} download>
            <button>Descarga mi CV <IoMdDownload /></button>
          </a>
        </article>
        <article>
          <a href="mailto:deydrealonso@gmail.com" target="_blank" className="icon"><MdEmail className="footerIcon" /></a>
          <a href="https://github.com/Deydre" target="_blank" className="icon"><FaGithub className="footerIcon" /></a>
          <a href="https://www.linkedin.com/in/deydre/" target="_blank" className="icon"><FaLinkedin className="footerIcon" /></a>
        </article>
      </section>

    </section>
  </>;
};

export default Hero;
