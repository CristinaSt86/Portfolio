import React from "react";
import css from "./JoggaInter.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import i1 from "../../images/i1.jpg";
import i2 from "../../images/i2.jpg";
import i3 from "../../images/i3.jpg";
import i4 from "../../images/i4.jpg";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const JoggaInter = () => {
  const images = [i1, i2, i3, i4];
  const { t } = useTranslation();

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("joggaPage.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("joggaPage.description")}</p>
          </ParagraphNight>
          <ul>
            {t("joggaPage.keyContributions", { returnObjects: true }).map(
              (contribution, index) => (
                <li key={index}>{contribution}</li>
              )
            )}
          </ul>
          <ParagraphNight>
            <p>{t("joggaPage.outcome")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("joggaPage.githubLink")}
          text={t("goToGithub.linkText")}
        />
        <section>
          <LightboxGallery images={images} alt={t("joggaPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default JoggaInter;
