import React, { useState, useEffect, useRef } from "react";
import css from "./Navigation.module.css";
import hamburgerMenu from "../../images/meniuHam.webp";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import Logo from "../../images/logo.svg";
import FABMenu from "../FABMenu/FABMenu";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        enableBodyScroll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    if (menuOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      enableBodyScroll();
    };
  }, [menuOpen]);

  const navLinks = [
    { name: t("header.home"), sectionId: "home" },
    { name: t("header.about"), sectionId: "about" },
    { name: t("header.projects"), sectionId: "projects" },
    { name: t("header.services"), sectionId: "services" },
    { name: t("header.contact"), sectionId: "contact" },
  ];

  const linksDarkMode =
    theme === "dark" ? `${css.links} ${css.linksNight}` : css.links; // Re-enable theme logic

  // const handleLanguageChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    enableBodyScroll();
  };

  return (
    <nav ref={navRef}>
      <div className={css.hamburger} onClick={toggleMenu}>
        <img src={hamburgerMenu} alt="mobile-menu" />
      </div>
      <ul className={`${css.list} ${menuOpen ? css.show : ""}`}>
        <div onClick={() => scrollToSection("home")} className={css.mobileLogo}>
          <img src={Logo} alt="Logo" />
        </div>

        {navLinks.map((link, index) => (
          <li key={index} className={css.navItem}>
            <button
              className={linksDarkMode}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection(link.sectionId)}
            >
              {link.name}
            </button>
          </li>
        ))}

        <li className={css.navItem}>
          <FABMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
