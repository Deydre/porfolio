import React from "react";
import ToggleMode from "./toggleMode/toggleMode";


const Header = () => {
  return <header>
    <nav>
      <a href="#sectionAbout">Sobre mí</a>
      <a href="#sectionSkillsCareer">Experiencia</a>
      <a href="#sectionProjects">Proyectos</a>
      <ToggleMode/>
    </nav>
  </header>;
};

export default Header;
