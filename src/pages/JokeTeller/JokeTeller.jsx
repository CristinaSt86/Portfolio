import React from "react";
import css from "./JokeTeller.module.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
// import Image from "../components/Image/Image";
// import miniRobotPic from "../images/miniRobotPic.jpg";
// import jokeDescription from "./jokeDescription.json";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import RobotApp from "../../components/RobotApp/RobotApp";
import Separator from "../../components/Separator/Separator";

const JokeTeller = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="joke-teller-project" className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1 className={css.titlu}>{t("jokeTellerPage.pageTitle")}</h1>
          <Separator />
          <div className={css.textBtnContainer}>
            <ParagraphNight>
              <p>{t("jokeTellerPage.jokeDescription")}</p>
            </ParagraphNight>
            <PrimaryButton
              to={t("jokeTellerPage.githubLink")}
              text={t("jokeTellerPage.linkText")}
            />
          </div>
        </section>
        <section>
          <RobotApp />
          {/* <Image
     src={miniRobotPic}
     alt={t("jokeTellerPage.imageAlt")}
     className={css.imagine}
   />  */}
        </section>
      </div>
    </>
  );
};

export default JokeTeller;
