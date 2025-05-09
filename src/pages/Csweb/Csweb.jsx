import React from "react";
import css from "./Csweb.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import cs1 from "../../images/cs1.webp";
import cs2 from "../../images/cs2.webp";
import cs3 from "../../images/cs3.webp";
import cs4 from "../../images/cs4.webp";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import Separator from "../../components/Separator/Separator";

const Csweb = () => {
  const images = [cs1, cs3, cs4, cs2];
  const { t } = useTranslation();

  return (
    <>
      <div id="csweb-project" className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1 className={css.titlu}>{t("cswebPage.pageTitle")}</h1>
          <Separator />
          <ParagraphNight>
            <p>{t("cswebPage.description")}</p>
          </ParagraphNight>
          <ul>
            {t("cswebPage.keyContributions", { returnObjects: true }).map(
              (contribution, index) => (
                <li key={index}>{contribution}</li>
              )
            )}
          </ul>
          <ParagraphNight>
            <p>{t("cswebPage.outcome")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("cswebPage.githubLink")}
          text={t("cswebPage.linkText")}
        />
        <section>
          <LightboxGallery images={images} alt={t("cswebPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default Csweb;
