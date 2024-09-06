import React from "react";
import { useTheme } from "../../ThemeContext"; 
import Image from "../Image/Image";
import dn from "../../images/d-n.png";
import css from "./ThemeToggler.module.css"; 

const ThemeToggler = () => {
  const { toggleTheme } = useTheme(); 
 
  return (
    <Image
      src={dn}
      alt="dayNightSwitch"
      className={css.toggleBtn}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggler;
