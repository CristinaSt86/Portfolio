import React from "react";
import { Link } from "react-router-dom";
import css from "./GoToGithub.module.css";
import { useTheme } from "../../ThemeContext";

const GoToGithub = ({
  to, 
  text,
  onClick,
  target = "_blank",
  additionalClasses = "", // CSS classes that can be added
  children,
  rel = "noopener noreferrer", // Security for external links
  ...rest
}) => {
  const { theme } = useTheme(); // Assuming this returns either 'light' or 'dark'

  // Function to get the appropriate theme class
  const gtgNightMode = () => {
    return theme === "dark" ? css.darkTheme : css.lightTheme;
  };

  // Handle click logic based on the presence of a URL or just a scroll action
  const handleClick = (e) => {
    // If `onClick` is provided, use it to handle actions like scrolling
    if (onClick) {
      e.preventDefault(); // Prevent default behavior
      onClick(); // Perform the custom action
    }
  };

  // Check if 'to' is provided, this determines if it's a link or a button-like behavior
  if (to) {
    return (
      <a
        href={to} // For external URLs
        target={target}
        rel={rel} // Security for external URLs
        className={`${css.Link} ${gtgNightMode()} ${additionalClasses}`}
        {...rest}
      >
        {children || text} {/* If children exist, render them, otherwise use text */}
      </a>
    );
  } else {
    // Button-like behavior (e.g., for scroll or toggle actions)
    return (
      <button
        onClick={handleClick}
        className={`${css.Link} ${gtgNightMode()} ${additionalClasses}`}
        {...rest}
      >
        {children || text} {/* If children exist, render them, otherwise use text */}
      </button>
    );
  }
};

export default GoToGithub;
