import React from "react";
import css from "./SecondaryButton.module.css";
import { useTheme } from "../../ThemeContext";

const SecondaryButton = ({
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

  const gtgNightMode = () => {
    return theme === "dark" ? css.darkTheme : css.lightTheme;
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (to) {
    return (
      <a
        href={to}
        target={target}
        rel={rel}
        className={`${css.secondaryButton} ${gtgNightMode()} ${additionalClasses}`}
        {...rest}
      >
        {children || text}
      </a>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={`${css.secondaryButton} ${gtgNightMode()} ${additionalClasses}`}
        {...rest}
      >
        {children || text}
      </button>
    );
  }
};

export default SecondaryButton;