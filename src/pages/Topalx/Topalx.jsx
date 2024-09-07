import React from "react";
import css from "./Topalx.module.css";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import Top1 from "../../images/Top1.webp";
import Top2 from "../../images/Top2.webp";
import Top3 from "../../images/Top3.webp";
import Top4 from "../../images/Top4.webp";
import Top5 from "../../images/Top5.webp";
import Top6 from "../../images/Top6.webp";
import Top7 from "../../images/Top7.webp";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const Topalx = () => {
  const { t } = useTranslation();
  const images = [Top1, Top2, Top3, Top4, Top5, Top6, Top7];

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("drivingSchoolWebsite.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("drivingSchoolWebsite.projectDescription")}</p>
          </ParagraphNight>
          <div className={css.technologiesUsed}>
            <h2>{t("drivingSchoolWebsite.technologiesUsedTitle")}</h2>
            <ul>
              <li>{t("drivingSchoolWebsite.technologiesUsed.react_typescript")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.tailwindcss")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.seo")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.image_optimization")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.suspense_lazy_loading")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.formspree")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.google_maps")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.google_ads")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.i18n")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.react_image_gallery")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.responsive_design")}</li>
              <li>{t("drivingSchoolWebsite.technologiesUsed.third_party_libraries")}</li>
            </ul>
          </div>
          <div className={css.additionalFeatures}>
            <h2>{t("drivingSchoolWebsite.additionalFeaturesTitle")}</h2>
            <ul>
              <li>{t("drivingSchoolWebsite.additionalFeatures.image_optimization")}</li>
              <li>{t("drivingSchoolWebsite.additionalFeatures.custom_animations")}</li>
              <li>{t("drivingSchoolWebsite.additionalFeatures.cross_browser")}</li>
              <li>{t("drivingSchoolWebsite.additionalFeatures.future_proof")}</li>
            </ul>
          </div>
        </section>
        <GoToGithub
          to={t("drivingSchoolWebsite.githubLink")}
          text={t("goToGithub.linkText")}
        />
        <section style={{ width: "100%" }}>
          <LightboxGallery images={images} alt={t("drivingSchoolWebsite.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default Topalx;
