import React from "react";
import css from "./FigoRest.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import figoPic1 from "../../images/figoPic1.webp";
import figoPic2 from "../../images/figoPic2.webp";
import figoPic3 from "../../images/figoPic3.webp";
import figoPic4 from "../../images/figoPic4.webp";
import figoPic5 from "../../images/figoPic5.webp";
import figoPic6 from "../../images/figoPic6.webp";
import figoPic7 from "../../images/figoPic7.webp";
import figoPic8 from "../../images/figoPic8.webp";
import figoPic9 from "../../images/figoPic9.webp";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const FigoRest = () => {
  const images = [
    figoPic1,
    figoPic2,
    figoPic3,
    figoPic4,
    figoPic5,
    figoPic6,
    figoPic7,
    figoPic8,
    figoPic9,
  ];

  const { t } = useTranslation();

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("figoRestPage.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("figoRestPage.description")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("figoRestPage.githubLink")}
          text={t("goToGithub.linkText")}
        />
        <section style={{ width: "100%" }}>
          <LightboxGallery images={images} alt={t("figoRestPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default FigoRest;
