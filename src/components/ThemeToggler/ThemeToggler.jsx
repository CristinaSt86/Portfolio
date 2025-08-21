import React from "react";
import { useTheme } from "../../ThemeContext";
import css from "./ThemeToggler.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <Icon
      icon="mdi:weather-night"
      width="24"
      height="24"
      alt="dayNightSwitch"
      className={css.toggleBtn}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggler;
