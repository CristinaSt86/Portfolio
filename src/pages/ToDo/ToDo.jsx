import React from "react";
import css from "./ToDo.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import Todo1 from "../../images/Todo1.jpg";
import Todo2 from "../../images/Todo2.jpg";
import Todo3 from "../../images/Todo3.jpg";
import Todo4 from "../../images/Todo4.jpg";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const ToDo = () => {
  const images = [Todo1, Todo2, Todo3, Todo4];
  const { t } = useTranslation();

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1>{t("todoPage.pageTitle")}</h1>
          <ParagraphNight>
            <p>{t("todoPage.todoDescription")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("todoPage.githubLin")}
          text={t("goToGithub.linkText")}
        />
        <section style={{ width: "100%" }}>
          <LightboxGallery images={images} alt={t("toDoPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default ToDo;
