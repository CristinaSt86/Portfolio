import React from "react";
import css from "./AboutPage.module.css";
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
import c19 from "../../images/c19.webp";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Separator from "../../components/Separator/Separator";
//import { useTheme } from "../../ThemeContext";
import { Icon } from "@iconify/react";

const AboutPage = () => {
  const { t } = useTranslation();
  //const { theme } = useTheme();

  // helper pentru a citi în siguranță array-urile din i18n
  const readArray = (path) => {
    const arr = t(path, { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  };

  const uxSkills = readArray("aboutPage.ux.skills");
  const visualSkills = readArray("aboutPage.visual.skills");
  const toolSkills = readArray("aboutPage.tools.skills");
  const aiSkills = readArray("aboutPage.ai.skills");
  const feSkills = readArray("aboutPage.frontend.skills");
  const languages = readArray("aboutPage.languages");

  const certifications = [c19, c11, c12, c13, c14, c15, c16, c17, c18];

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
              {(t("aboutPage.introText", { returnObjects: true }) || []).map(
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
            {/* UX & Design */}
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>
                {t("aboutPage.sectionTitles.ux")}
              </h3>
              <ul className={css.chips}>
                {uxSkills.map((s, i) => (
                  <li key={`ux-${i}`} className={`${css.chip} ${css.chipUX}`}>
                    <Icon
                      icon={s.icon || "mdi:checkbox-blank-circle"}
                      width="20"
                      height="20"
                      aria-hidden="true"
                    />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual & Content Design */}
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>
                {t("aboutPage.sectionTitles.visual")}
              </h3>
              <ul className={css.chips}>
                {visualSkills.map((s, i) => (
                  <li key={`visual-${i}`} className={css.chip}>
                    <Icon
                      icon={s.icon || "mdi:image-outline"}
                      width="20"
                      height="20"
                      aria-hidden="true"
                    />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>
                {t("aboutPage.sectionTitles.tools")}
              </h3>
              <ul className={css.chips}>
                {toolSkills.map((s, i) => (
                  <li key={`tool-${i}`} className={`${css.chip} ${css.chipUX}`}>
                    <Icon
                      icon={s.icon || "mdi:wrench-outline"}
                      width="20"
                      height="20"
                      aria-hidden="true"
                      color={s.color || undefined} // recolorează doar simple-icons/mdi
                    />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & Innovation */}
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>
                {t("aboutPage.sectionTitles.ai")}
              </h3>
              <ul className={css.chips}>
                {aiSkills.map((s, i) => (
                  <li key={`ai-${i}`} className={`${css.chip} ${css.chipAI}`}>
                    <Icon
                      icon={s.icon || "mdi:robot"}
                      width="20"
                      height="20"
                      aria-hidden="true"
                    />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend & Tech */}
            <div className={css.skillsHeader}>
              <h3 className={css.groupTitle}>
                {t("aboutPage.sectionTitles.frontend")}
              </h3>
              <ul className={css.chips}>
                {feSkills.map((s, i) => (
                  <li key={`fe-${i}`} className={css.chip}>
                    <Icon
                      icon={s.icon || "mdi:code-tags"}
                      width="20"
                      height="20"
                      aria-hidden="true"
                    />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
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

      {/* Languages */}
      <div className={css.foreignList}>
        <h2 className={css.lanTitle}>{t("aboutPage.languagesHeader")}</h2>
        <Separator />
        <div className={css.languageGrid}>
          {(languages || []).map((lang, index) => (
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