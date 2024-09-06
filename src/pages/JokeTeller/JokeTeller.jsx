import React from "react";
import css from "./JokeTeller.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
// import Image from "../components/Image/Image";
// import miniRobotPic from "../images/miniRobotPic.jpg";
// import jokeDescription from "./jokeDescription.json";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import RobotApp from "../../components/RobotApp/RobotApp";

const JokeTeller = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("jokeTellerPage.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("jokeTellerPage.jokeDescription")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("jokeTellerPage.githubLink")}
          text={t("goToGithub.linkText")}
        />
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
