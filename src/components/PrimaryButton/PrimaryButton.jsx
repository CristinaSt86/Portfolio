import React from "react";
import css from "./PrimaryButton.module.css";
import { useTheme } from "../../ThemeContext";

const PrimaryButton = ({
  to,
  text,
  onClick,
  target = "_blank",
  additionalClasses = "",
  children,
  rel = "noopener noreferrer",
  ...rest
}) => {
  const { theme } = useTheme();

  // Same logic, just simplified
  const themeClass = theme === "dark" ? css.darkTheme : css.lightTheme;

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const content = children || text;

  if (to) {
    return (
      <a
        href={to}
        target={target}
        rel={rel}
        className={`${css.primaryButton} ${themeClass} ${additionalClasses}`}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${css.primaryButton} ${themeClass} ${additionalClasses}`}
      {...rest}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;