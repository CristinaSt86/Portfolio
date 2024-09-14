import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const GoToGithub = ({ to, text, target = "_blank", additionalClasses, children, ...rest }) => {
  const {theme} = useTheme(); // Assuming this returns either 'light' or 'dark'

  // Function to get the appropriate theme class
  const gtgNightMode = () => {
    return theme === "dark" ? css.darkTheme : css.lightTheme;
  };

  return (
    <Link
      to={to}
      className={`${css.Link} ${gtgNightMode()} ${additionalClasses || ""}`}  // Apply theme-based class
      target={target}
      {...rest}  // Spread any additional props, like `rel`
    >
      {children ? children : text}  {/* If children are provided, render them, otherwise use text */}
    </Link>
  );
};

export default GoToGithub;
