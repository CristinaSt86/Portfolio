import React from "react";
import css from "./AdviceSlip.module.css";
import Image from "../../components/Image/Image";
import AdvicePic from "../../images/AdvicePic.webp";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const AdviceSlip = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="advice-slip-project" className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("advicePage.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("advicePage.adviceDescription")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("advicePage.githubLink")}
          text={t("goToGithub.linkText")}
        />
        <section>
          <Image
            src={AdvicePic}
            alt="Advice Slip Image"
            className={css.imagine}
          />
        </section>
      </div>
    </>
  );
};

export default AdviceSlip;
