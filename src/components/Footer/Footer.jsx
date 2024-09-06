import React from "react";
import css from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import eml from "../../images/eml.svg";
import inst from "../../images/inst.svg";
import lnkdn from "../../images/lnkdn.svg";
import gth from "../../images/gth.svg";

const Footer = () => {
  const { t } = useTranslation();
  const socialMedia = [
    { src: eml, url: "mailto:cristina.stoian@yahoo.com", alt: "Email" },
    {
      src: inst,
      url: "https://www.instagram.com/crissalexx/",
      alt: "Instagram",
    },
    {
      src: lnkdn,
      url: "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
      alt: "LinkedIn",
    },
    { src: gth, url: "https://github.com/CristinaSt86", alt: "GitHub" },
  ];

  return (
    <footer className={css.footer}>
      <div className={css.left}>
        <p className={css.textFoot}>{t("footerText")}</p>
        <p className={css.textFoot}>{t("footerText2")}</p>
      </div>
      <div className={css.right}>
        {socialMedia.map((media) => (
          <a
            href={media.url}
            key={media.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={media.src} alt={media.alt} className={css.socialMedia} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
