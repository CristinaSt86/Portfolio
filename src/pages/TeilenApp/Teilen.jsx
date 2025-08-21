import React from "react";
import css from "./Teilen.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import ttt1 from "../../images/ttt1.webp";
import ttt2 from "../../images/ttt2.webp";
import ttt3 from "../../images/ttt3.webp";
import ttt4 from "../../images/ttt4.webp";
import ttt5 from "../../images/ttt5.webp";
import ttt6 from "../../images/ttt6.webp";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import Separator from "../../components/Separator/Separator";

const Teilen = () => {
  const { t } = useTranslation();
  const images = [ttt1, ttt2, ttt3, ttt4, ttt5, ttt6];

  return (
    <>
      <div id="teilen" className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1 className={css.titlu}>{t("tttPage.pageTitle")}</h1>
          <Separator />
          <ParagraphNight>
            <p>{t("tttPage.description")}</p>
          </ParagraphNight>

          <ul>
            {t("tttPage.keyContributions", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>

          <ParagraphNight>
            <p>{t("tttPage.outcome")}</p>
          </ParagraphNight>
        </section>

        <div className={css.btns}>
          <GoToGithub
            to={t("tttPage.caseStudyLink")}
            text={t("tttPage.linkUX")}
          />
        </div>

        <section>
          <LightboxGallery images={images} alt={t("tttPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default Teilen;
