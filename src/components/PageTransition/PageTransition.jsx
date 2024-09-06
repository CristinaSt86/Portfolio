import React, { useEffect, useState } from "react";
import css from "./PageTransition.module.css";
const PageTransition = ({ children, duration = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const containerStyle = {
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      className={`${css.transitionContainer} ${isVisible ? css.visible : ""}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default PageTransition;
