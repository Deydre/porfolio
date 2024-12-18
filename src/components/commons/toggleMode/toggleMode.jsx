import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";

const ToggleMode = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isDark
      ? document.body.classList.remove('light')
      : document.body.classList.add('light')  
  }, [isDark]);

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "☀️" }}
      aria-label="Dark mode toggle"
    />
  );
};

export default ToggleMode;
