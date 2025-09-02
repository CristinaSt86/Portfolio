import React from "react";
import css from "./AdviceSlip.module.css";
import Image from "../../components/Image/Image";
import AdvicePic from "../../images/AdvicePic.webp";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import Separator from "../../components/Separator/Separator";

const AdviceSlip = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="advice-slip-project" className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1 className={css.titlu}>{t("advicePage.pageTitle")}</h1>
          <Separator />
          <div className={css.textBtnContainer}>
            <ParagraphNight>
              <p>{t("advicePage.adviceDescription")}</p>
            </ParagraphNight>
            <PrimaryButton
              to={t("advicePage.githubLink")}
              text={t("advicePage.linkText")}
            />
          </div>
        </section>

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
