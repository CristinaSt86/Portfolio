import React, { useEffect, useState } from "react";
import css from "./BackToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Move the scroll position logic here
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 50) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${css.backToTopContainer} ${
        isBottom ? css.bottomAtEnd : ""
      }`}
    >
      {isVisible && (
        <button onClick={scrollToTop} className={css.backToTopButton}>
          <FaArrowUp className={css.icon} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
