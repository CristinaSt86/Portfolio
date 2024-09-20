import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const GoToGithub = ({
  to,
  text,
  onClick,
  target = "_blank",
  additionalClasses,
  children,
  ...rest
}) => {
  const { theme } = useTheme(); // Assuming this returns either 'light' or 'dark'

  // Function to get the appropriate theme class
  const gtgNightMode = () => {
    return theme === "dark" ? css.darkTheme : css.lightTheme;
  };

  const handleClick = (e) => {
    // If an onClick handler is provided, use it
    if (onClick) {
      e.preventDefault(); // Prevent the default behavior (e.g., navigating away)
      onClick(); // Call the custom function (e.g., scroll to section)
    } else {
      // Otherwise, proceed with the default behavior (navigating to URL)
      window.open(to, target);
    }
  };
  return (
    <Link
      onClick={handleClick}
      to={to}
      className={`${css.Link}  ${gtgNightMode()} ${additionalClasses || ""}`} // Apply theme-based class
      target={target}
      {...rest} // Spread any additional props, like `rel`
    >
      {children ? children : text}{" "}
      {/* If children are provided, render them, otherwise use text */}
    </Link>
  );
};

export default GoToGithub;
