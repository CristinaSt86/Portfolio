import React from "react";
import css from "./ToDo.module.css";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../../components/LightboxGallery/LightboxGallery";
import Todo1 from "../../images/Todo1.webp";
import Todo2 from "../../images/Todo2.webp";
import Todo3 from "../../images/Todo3.webp";
import Todo4 from "../../images/Todo4.webp";
import ParagraphNight from "../../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";
import Separator from "../../components/Separator/Separator";

const ToDo = () => {
  const images = [Todo1, Todo2, Todo3, Todo4];
  const { t } = useTranslation();

  return (
    <>
      <div id="todo-project"  className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <section className={css.aboutApp}>
          <h1 className={css.titlu}>{t("todoPage.pageTitle")}</h1>
          <Separator/>
          <ParagraphNight>
            <p>{t("todoPage.todoDescription")}</p>
          </ParagraphNight>
        </section>
        <GoToGithub
          to={t("todoPage.githubLink")}
          text={t("todoPage.linkText")}
        />
        <section style={{ width: "100%" }}>
          <LightboxGallery images={images} alt={t("toDoPage.imageAlt")} />
        </section>
      </div>
    </>
  );
};

export default ToDo;
