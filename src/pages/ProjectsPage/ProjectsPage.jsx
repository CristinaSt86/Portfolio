import React, { useEffect } from "react";
import css from "./ProjectsPage.module.css";
import WeatherMini from "../../components/WeatherMini/WeatherMini";
import { useTranslation } from "react-i18next";
import TinyTips from "../../components/TinyTips/TinyTips";
import { Helmet } from "react-helmet-async";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import Topalx from "../Topalx/Topalx";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import JokeTeller from "../JokeTeller/JokeTeller";
import Todo from "../ToDo/ToDo";
import FigoRest from "../FigoRest/FigoRest";
import JoggaInter from "../JoggaInter/JoggaInter";

const ProjectsPage = () => {
  const { t } = useTranslation();

  // Fetch projects from the JSON translation file, including the id field
  const projects = t("projectsPage.projects", { returnObjects: true });

  // Function to scroll to the specific project section by ID
  const scrollToProject = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Cristina Stoian | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the projects I've worked on as a frontend developer, specializing in responsive web design, React, JavaScript, and modern web technologies."
        />
        <meta
          name="keywords"
          content="frontend developer projects, react projects, web development portfolio, JavaScript projects, responsive design, Cristina Stoian projects"
        />
      </Helmet>

      <div id="projects" className={css.mainContainer}>
        <div>
          <WeatherMini />
        </div>
        <hr />
        <div>
          <ul className={css.ulLinks}>
            {projects.map((project, index) => (
              <li key={index}>
                <GoToGithub
                  text={project.name} // Use only the text prop, no 'to' prop here
                  onClick={() => scrollToProject(project.id)} // Call scroll function on click
                  target="_self" // Keep it here in case you still want this for consistency
                  additionalClasses={css.proBtn}
                />
              </li>
            ))}
          </ul>
        </div>

        <hr />
        <div>
          <TinyTips />
        </div>
      </div>
      <section id="topalx-project">
        <Topalx />
      </section>
      <section id="advice-slip-project">
        <AdviceSlip />
      </section>
      <section id="joke-teller-project">
        <JokeTeller />
      </section>
      <section id="todo-project">
        <Todo />
      </section>
      <section id="figo-rest-project">
        <FigoRest />
      </section>
      <section id="jogga-inter-project">
        <JoggaInter />
      </section>
    </>
  );
};

export default ProjectsPage;
