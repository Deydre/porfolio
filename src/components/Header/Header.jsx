import React from "react";
import ToggleMode from "../commons/toggleMode/toggleMode";


const Header = () => {
  return <header>
    <nav>
      <a href="">Sobre mí</a>
      <a href="">Proyectos</a>
      <a href="">Experiencia</a>
      <ToggleMode/>
    </nav>
  </header>;
};

export default Header;
