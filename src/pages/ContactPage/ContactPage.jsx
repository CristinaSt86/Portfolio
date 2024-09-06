import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import Form from "../../components/Form/Form";
import css from "./ContactPage.module.css";
import pc from "../../images/pc.jpg";
import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import msg from "../../images/message.png";

const ContactPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const emailAddress = "cristina.stoian@yahoo.com";
  const contactBgDarkMode = theme === "dark"
    ? `${css.contactBackground} ${css.contactBackgroundNight}`
    : css.contactBackground;

  return (
    <>
      {/* <div className={css.placeholder}></div> */}
      <h1 className={css.contactMe}>{t("contactPage.contactMe")}</h1>
      <div className={css.display}>
        <div className={contactBgDarkMode}>
          <div className={css.imageContainer}>
            <Image
              src={pc}
              alt={t("contactPage.imageAlt")}
              className={css.imagine}
            />
            <div className={css.contactContainer}>
              <h2 className={css.mobile}>{t("contactPage.mobile")}</h2>
              <div className={css.msgHireMe}>
                <a href={`mailto:${emailAddress}`} className={css.mail}>
                  {t("contactPage.hireMe")}
                </a>
                <img src={msg} alt="email" />
              </div>
              <div className={css.contactLinks}>
                <Link to="https://github.com/CristinaSt86" target="blank">
                  <Image
                    src={Github}
                    alt={t("contactPage.githubAlt")}
                    className={css.socialMediaImg}
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/cristina-stoian-frontend-developer/"
                  target="blank"
                >
                  <Image
                    src={Linkedin}
                    alt={t("contactPage.linkedInAlt")}
                    className={css.socialMediaImg}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default ContactPage;
