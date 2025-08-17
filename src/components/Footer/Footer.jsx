import React from "react";
import css from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { useTheme } from "../../ThemeContext";
import Separator from "../Separator/Separator";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const socialMedia = [
    {
      icon: "mdi:email-outline",
      url: "mailto:cristina.stoian@yahoo.com",
      label: "Email",
    },
    {
      icon: "fa6-brands:instagram",
      url: "https://www.instagram.com/crissalexx/",
      label: "Instagram",
    },
    {
      icon: "fa6-brands:linkedin",
      url: "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
      label: "LinkedIn",
    },
    {
      icon: "fa6-brands:github",
      url: "https://github.com/CristinaSt86",
      label: "GitHub",
    },
  ];

  return (
    <>
      <Separator />
      <footer className={css.footer}>
        <div className={css.left}>
          <p
            className={`${css.textFoot} ${
              theme === "dark" ? css.darkIcon : css.lightIcon
            }`}
          >
            {t("footerText")}
          </p>
        </div>
        <div className={css.right}>
          {socialMedia.map((media) => (
            <a
              href={media.url}
              key={media.label}
              target="_blank"
              rel="noopener noreferrer"
              className={css.iconLink}
              aria-label={media.label}
            >
              <Icon
                icon={media.icon}
                className={`${css.socialIcon} ${
                  theme === "dark" ? css.darkIcon : css.lightIcon
                }`}
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
