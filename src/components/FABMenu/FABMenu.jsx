import React, { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import css from "./FABMenu.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import MusicToggle from "../MusicToggle/MusicToggle";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import GoToGithub from "../GoToGithub/GoToGithub"; // The GoToGithub component

const FABMenu = ({ onToggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fabRef = useRef(null); 




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsExpanded(false); // Close the FABMenu when clicking outside
        onToggleExpand && onToggleExpand(false); // Notify the parent
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, onToggleExpand]);

 


  const handleFabToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the FABMenu expansion
    onToggleExpand && onToggleExpand(!isExpanded); // Notify the parent (Navigation) to adjust the height, if needed
  };

  return (
    <div className={css.fabContainer} ref={fabRef}>
      {/* Floating Action Button with FaPlus as children */}
      <GoToGithub onClick={handleFabToggle}>
        <FaPlus />
      </GoToGithub>

      {/* Expandable Menu Items */}
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
