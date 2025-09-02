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
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Separator from "../../components/Separator/Separator";
import { useTheme } from "../../ThemeContext";
import { Icon } from "@iconify/react";

const AboutPage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const SubTitle =
    theme === "dark"
      ? `${css.subSkillsTitle} ${css.subSkillsTitleNight} `
      : css.subSkillsTitle;

  const skills = [
    {
      name: t("aboutPage.skills.3.name"),
      url: "https://reactjs.org/",
      icon: "logos:react",
    },
    {
      name: t("aboutPage.skills.2.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "logos:javascript",
    },
    {
      name: t("aboutPage.skills.5.name"),
      url: "https://www.typescriptlang.org/",
      icon: "logos:typescript-icon",
    },
    {
      name: t("aboutPage.skills.4.name"),
      url: "https://tailwindcss.com/",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: t("aboutPage.skills.7.name"),
      url: "https://nextjs.org/",
      icon: "logos:nextjs-icon",
    },
    {
      name: t("aboutPage.skills.0.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: "logos:html-5",
    },
    {
      name: t("aboutPage.skills.1.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: "logos:css-3",
    },
    {
      name: t("aboutPage.skills.6.name"),
      url: "https://github.com/",
      icon: "logos:git-icon",
    },
  ];

  const uxSkills = [
    { name: "Figma", url: "https://www.figma.com", icon: "logos:figma" },
    {
      name: "User Research",
      url: "https://userresearch.google.com",
      icon: "mdi:account-search-outline",
    },
    {
      name: "Wireframes & Prototypes",
      url: "https://designsprintkit.withgoogle.com/methodology/phase4-prototype",
      icon: "mdi:vector-square",
    },
    {
      name: "Usability Testing",
      url: "https://www.nngroup.com/articles/usability-testing-101/",
      icon: "mdi:checkbox-marked-circle-outline",
    },
    {
      name: "Design Thinking",
      url: " https://design.google/library/",
      icon: "mdi:lightbulb-on-outline",
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
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
      </Helmet>
      <div id="about" className={css.mainContainer}>
        <main className={css.main2}>
          <div className={css.aboutBackground}>
            <h1 className={css.hey}>{t("aboutPage.hello")}</h1>
            <Separator />
            <ParagraphNight>
              {t("aboutPage.introText", { returnObjects: true }).map(
                (text, index) => (
                  <p className={css.paragraph} key={index}>
                    {text}
                  </p>
                )
              )}
            </ParagraphNight>
            <div className={css.btnContainer}>
              <PrimaryButton
                onClick={scrollToProjects}
                text={t("aboutPage.toProjects")}
              />
            </div>
          </div>

          <div className={css.aside}>
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>UX & Design</h3>
              <ul className={css.chips}>
                {uxSkills.map((s, i) => (
                  <li key={`ux-${i}`} className={`${css.chip} ${css.chipUX}`}>
                    <Icon icon={s.icon} width="20" height="20" aria-hidden="true" />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>Frontend & Tech</h3>
              <ul className={css.chips}>
                {skills.map((s, i) => (
                  <li key={i} className={css.chip}>
                    <Icon icon={s.icon} width="20" height="20" aria-hidden="true" />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.certificationsContainer}>
            <h2 className={css.certTitle}>
              {t("aboutPage.certificationsHeader")}
            </h2>
            <Separator />
            <section className={css.lightbox}>
              <LightboxGallery images={certifications} />
            </section>
          </div>
        </main>
      </div>
      <div className={css.foreignList}>
        <h2 className={css.lanTitle}>{t("aboutPage.languagesHeader")}</h2>
        <Separator />
        <div className={css.languageGrid}>
          {languages.map((lang, index) => (
            <div key={index} className={css.languageCard}>
              <span className={css.languageName}>{lang.language}</span>
              <span className={css.languageLevel}>{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
