import React, { useContext } from "react";
import Toggle from "react-toggle";
import { context } from "../../../context/context"

const ToggleMode = () => {

  const { isDark, updateDarkMode } = useContext(context);

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => updateDarkMode(target.checked)}
      icons={{ checked: "🌙", unchecked: "☀️" }}
      aria-label="Dark mode toggle"
    />
  );
};

export default ToggleMode;
