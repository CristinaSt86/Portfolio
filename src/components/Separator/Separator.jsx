import React from "react";
import css from "./Separator.module.css";
import { useTheme } from "../../ThemeContext";

const Separator = () => {
  const { theme } = useTheme();
  const toggleSeparator =
    theme === "dark"
      ? `${css.separator} ${css.darkSeparator}`
      : `${css.separator} ${css.lightSeparator}`;
  return <div className={toggleSeparator}></div>;
};

export default Separator;
