

import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react"; // 🔹 import Iconify
import css from "./FABMenu.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import MusicToggle from "../MusicToggle/MusicToggle";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
//import PrimaryButton from "../PrimaryButton/PrimaryButton";

const FABMenu = ({ onToggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fabRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsExpanded(false);
        onToggleExpand && onToggleExpand(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, onToggleExpand]);

  const handleFabToggle = () => {
    setIsExpanded(!isExpanded);
    onToggleExpand && onToggleExpand(!isExpanded);
  };

  return (
    <div className={css.fabContainer} ref={fabRef}>
      {/* Buton principal FAB */}
      <button
        onClick={handleFabToggle}
        className={css.fabBTN}
      >
        <Icon icon="mdi:plus" width="24" height="24" /> 
      </button>
      <div className={`${css.fabMenu} ${isExpanded ? css.show : ""}`}>
        <div className={`${css.fabItem} ${isExpanded ? css.show : ""}`}>
          <LanguageSelector />
        </div>
        <div className={`${css.fabItem} ${isExpanded ? css.show : ""}`}>
          <ThemeToggler />
        </div>
        <div className={`${isExpanded ? css.show : ""}`}>
          <MusicToggle />
        </div>
      </div>
    </div>
  );
};

export default FABMenu;
