import React from "react";
import css from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight"
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import c11 from "../../images/c11.jpg"
import c12 from "../../images/c12.jpg";
import c13 from "../../images/c13.jpg";
import c14 from "../../images/c14.jpg";
import c15 from "../../images/c15.png";
import c16 from "../../images/c16.png";
import c17 from "../../images/c17.png";
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

  const certifications = [c11, c12, c13, c14, c15, c16, c17,c18];

  return (
    <>
      {/* <div className={css.placeholder}></div> */}
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
          {/* <hr /> */}
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
