import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import Form from "../../components/Form/Form";
import css from "./ContactPage.module.css";
import pc from "../../images/pc.webp";
import Linkedin from "../../images/linkedin.webp";
import Github from "../../images/github.webp";
import msg from "../../images/message.webp";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const emailAddress = "cristina.stoian@yahoo.com";
  const contactBgDarkMode =
    theme === "dark"
      ? `${css.contactBackground} ${css.contactBackgroundNight}`
      : css.contactBackground;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cristinastoian-developer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://cristinastoian-developer.com/contact",
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristina Stoian",
    jobTitle: "Frontend Developer",
    email: emailAddress,
    url: "https://cristinastoian-developer.com",
    description:
      "Get in touch with me for collaborations or job opportunities in frontend development.",
    sameAs: [
      "https://github.com/CristinaSt86",
      "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact | Cristina Stoian | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me for collaborations or job opportunities in frontend development."
        />
        <meta
          name="keywords"
          content="contact, frontend developer, collaboration, hire a developer"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
              <h2 className={css.mobile}>
                {t("contactPage.mobileLabel")}{" "}
                <a
                  href={`tel:${t("contactPage.mobileNumber")}`}
                  className={css.mobile}
                >
                  {t("contactPage.mobileNumber")}
                </a>
              </h2>
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
