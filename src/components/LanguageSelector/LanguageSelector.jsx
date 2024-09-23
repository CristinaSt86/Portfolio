import React from "react";
import { useTranslation } from "react-i18next";
import css from "./LanguageSelector.module.css"; // Add styles for the dropdown

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Switch language
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className={css.languageDropdown}
    >
      <option value="en" className={css.option}>En</option>
      <option value="de" className={css.option}>De</option>
      <option value="ro" className={css.option}>Ro</option>
    </select>
  );
};

export default LanguageSelector;
