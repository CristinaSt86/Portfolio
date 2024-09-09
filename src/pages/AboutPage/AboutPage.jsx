import React from "react";
import css from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import c11 from "../../images/c11.webp";
import c12 from "../../images/c12.webp";
import c13 from "../../images/c13.webp";
import c14 from "../../images/c14.webp";
import c15 from "../../images/c15.webp";
import c16 from "../../images/c16.webp";
import c17 from "../../images/c17.webp";
import c18 from "../../images/c18.webp";
import { useTranslation } from "react-i18next";
import H from "../../images/H.svg";
import cs3 from "../../images/cs3.svg";
import jvs from "../../images/jvs.svg";
import R from "../../images/R.svg";
import tlw from "../../images/tlw.svg";
import tys from "../../images/tys.svg";
import gt from "../../images/gt.svg";
import nxt from "../../images/nxt.svg";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  const { t } = useTranslation();

  const skills = [
    {
      name: t("aboutPage.skills.3.name"),
      url: "https://reactjs.org/",
      icon: R,
    },
    {
      name: t("aboutPage.skills.2.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: jvs,
    },
    {
      name: t("aboutPage.skills.5.name"),
      url: "https://www.typescriptlang.org/",
      icon: tys,
    },
    {
      name: t("aboutPage.skills.4.name"),
      url: "https://tailwindcss.com/",
      icon: tlw,
    },
    {
      name: t("aboutPage.skills.7.name"),
      url: "https://nextjs.org/",
      icon: nxt,
    },
    {
      name: t("aboutPage.skills.0.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: H,
    },
    {
      name: t("aboutPage.skills.1.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: cs3,
    },

    {
      name: t("aboutPage.skills.6.name"),
      url: "https://github.com/",
      icon: gt,
    },
  ];

  const languages = [
    {
      language: t("aboutPage.languages.0.language"),
      level: t("aboutPage.languages.0.level"),
    },
    {
      language: t("aboutPage.languages.1.language"),
      level: t("aboutPage.languages.1.level"),
    },
    {
      language: t("aboutPage.languages.2.language"),
      level: t("aboutPage.languages.2.level"),
    },
    {
      language: t("aboutPage.languages.3.language"),
      level: t("aboutPage.languages.3.level"),
    },
  ];

  const certifications = [c11, c12, c13, c14, c15, c16, c17, c18];

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
        name: "About",
        item: "https://cristinastoian-developer.com/about",
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristina Stoian",
    jobTitle: "Frontend Developer",
    url: "https://cristinastoian-developer.com",
    description:
      "Learn more about me, my journey, and my skills as a frontend developer.",
    sameAs: [
      "https://github.com/CristinaSt86",
      "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Me | Cristina Stoian | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Learn more about me, my journey, and my skills as a frontend developer."
        />
        <meta
          name="keywords"
          content="about me, frontend developer, experience, web development"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className={css.mainContainer}>
        <aside className={css.aside}>
          <div>
            <h2 className={css.skills}>{t("aboutPage.skillsHeader")}</h2>
            <ul className={css.ulist}>
              {skills.map((skill, index) => (
                <li key={index} className={css.listItem}>
                  <Link
                    to={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.nameIcon}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={css.icon}
                    />
                    {skill.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main className={css.main2}>
          <div className={css.aboutBackground}>
            <h2 className={css.hey}>{t("aboutPage.hello")}</h2>
            <ParagraphNight>
              {t("aboutPage.introText", { returnObjects: true }).map(
                (text, index) => (
                  <p className={css.paragraph} key={index}>
                    {text}
                  </p>
                )
              )}
            </ParagraphNight>
          </div>
          <div className={css.certificationsContainer}>
            <h2>{t("aboutPage.certificationsHeader")}</h2>
            <section className={css.lightbox}>
              <LightboxGallery images={certifications} />
            </section>
          </div>
          <div className={css.foreignList}>
            <h2 className={css.lanTitle}>{t("aboutPage.languagesHeader")} </h2>
            <ul className={css.spokenLan}>
              {languages.map((lang, index) => (
                <li key={index}>
                  <span className={css.boldLang}>{lang.language}</span>
                  <br /> - {lang.level}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
