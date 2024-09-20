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

  // Function to scroll to the specific project section
  const scrollToProject = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cristinastoian-developer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://cristinastoian-developer.com/projects",
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristina Stoian",
    jobTitle: "Frontend Developer",
    url: "https://cristinastoian-developer.com",
    description:
      "Frontend Developer specializing in building personalized and responsive websites.",
    sameAs: [
      "https://github.com/CristinaSt86",
      "https://www.linkedin.com/in/cristina-stoian-frontend-developer/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Limburgstrasse 47",
      addressLocality: "Weilheim an der Teck",
      postalCode: "73235",
      addressCountry: "DE",
    },
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
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                  to={`#${project.id}`} // Use the project ID directly from the JSON
                  text={project.name}
                  onClick={() => scrollToProject(project.id)} // Scroll to the matching section by ID
                  target="_self"
                  additionalClasses={`${css.proBtn} ${
                    index % 2 === 0 ? css.slideInLeft : css.slideInRight
                  }`}
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

      {/* Add project sections with IDs matching those in the JSON */}
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
