import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../ThemeContext"; // dacă ai contextul de theme
import css from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme(); // preia tema activă

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowMenu(false);
  };

  return (
    <div className={css.wrapper}>
      <button
        className={css.iconButton}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Icon
          icon="material-symbols:language"
          className={css.langIcon}
          style={{
            color: theme === "dark" ? "#fff" : "#333333", // alb pe dark mode, albastru pe light mode
          }}
        />
      </button>

      {showMenu && (
      <div className={`${css.dropdownMenu} ${showMenu ? css.show : ""}`}>
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("de")}>De</button>
          <button onClick={() => changeLanguage("ro")}>Ro</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
