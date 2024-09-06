import React from "react";
import css from "./ProjectsPage.module.css";
import { useNavigate } from "react-router-dom";
import WeatherMini from "../../components/WeatherMini/WeatherMini";
import { useTranslation } from "react-i18next";
import TinyTips from "../../components/TinyTips/TinyTips";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const proiecte = t("projectsPage.projects", { returnObjects: true });

  const handleProjectClick = (projectId) => {
    navigate(projectId);
  };

  // eslint-disable-next-line no-unused-vars
  const projects = [
    { name: t("projectsPage.projects.[0]"), path: "/advice-slip" },
    { name: t("projectsPage.miniRobot"), path: "/joke-teller" },
    { name: t("projectsPage.toDoApp"), path: "/to-do" },
    { name: t("projectsPage.figoRestaurant"), path: "/figo-restaurant" },
    { name: t("projectsPage.joggaInter"), path: "/jogga-inter" },
  ];

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={css.mainContainer}>
        <div>
          <WeatherMini />
        </div>
        <hr />
        <div>
          <ul className={css.ulLinks}>
            {proiecte.map((project, index) => (
              <li key={index}>
                <button
                  className={css.links}
                  onClick={() => handleProjectClick(project.path)}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <TinyTips />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
