import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import hamburgerMenu from "../../images/meniuHam.webp";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import Logo from "../../images/logo.svg"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.projects"), path: "/projects" },
    { name: t("header.services"), path: "/services" },
    { name: t("header.contact"), path: "/contact" },
  ];

  const { theme } = useTheme();
  const { i18n } = useTranslation();

  const linksDarkMode =
    theme === "dark" ? `${css.links}  ${css.linksNight}` : css.links;

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav ref={navRef}>
      <div className={css.hamburger} onClick={toggleMenu}>
        <img src={hamburgerMenu} alt="mobile-menu" />
      </div>
      <ul className={`${css.list} ${menuOpen ? css.show : ""}`}>
      <li className={css.navItemMobileLogo}>
      <img src={Logo} alt="Logo" className={css.mobileLogo} />
    </li>

        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={linksDarkMode}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
        <li className={css.navItem}>
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className={css.languageDropdown}
          >
            <option value="en" className={css.option}>
              En
            </option>
            <option value="de" className={css.option}>
              De
            </option>
            <option value="ro" className={css.option}>
              Ro
            </option>
          </select>
        </li>
        <li className={css.navItem}>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
