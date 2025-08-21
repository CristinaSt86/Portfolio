// import React from "react";
// import css from "./ProjectsPage.module.css";
// import WeatherMini from "../../components/WeatherMini/WeatherMini";
// import { useTranslation } from "react-i18next";
// import TinyTips from "../../components/TinyTips/TinyTips";
// import { Helmet } from "react-helmet-async";
// import GoToGithub from "../../components/GoToGithub/GoToGithub";
// import Topalx from "../Topalx/Topalx";
// import AdviceSlip from "../AdviceSlip/AdviceSlip";
// import JokeTeller from "../JokeTeller/JokeTeller";
// import Todo from "../ToDo/ToDo";
// import FigoRest from "../FigoRest/FigoRest";
// import JoggaInter from "../JoggaInter/JoggaInter";
// import Csweb from "../Csweb/Csweb";

// const ProjectsPage = () => {
//   const { t } = useTranslation();

//   // Fetch projects from the JSON translation file, including the id field
//   const projects = t("projectsPage.projects", { returnObjects: true });

//   // Function to scroll to the specific project section by ID
//   const scrollToProject = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Projects | Cristina Stoian | Frontend Developer Portfolio</title>
//         <meta
//           name="description"
//           content="Explore the projects I've worked on as a frontend developer, specializing in responsive web design, React, JavaScript, and modern web technologies."
//         />
//         <meta
//           name="keywords"
//           content="frontend developer projects, react projects, web development portfolio, JavaScript projects, responsive design, Cristina Stoian projects"
//         />
//       </Helmet>

//       <div id="projects" className={css.mainContainer}>
//         <div>
//           <WeatherMini />
//         </div>
//         {/* <Separator/> */}
//         <div>
//           <ul className={css.projectGrid}>
//             {projects.map((project, index) => (
//               <li
//                 key={index}
//                 className={css.projectCard}
//                 onClick={() => scrollToProject(project.id)}
//               >
//                 <div
//                   className={css.cardImage}
//                   style={{ backgroundImage: `url(${project.image})` }}
//                 >
//                   <div className={css.overlay}>
//                     <h3 className={css.projectTitle}>{project.name}</h3>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* <Separator/> */}
//         <div>
//           <TinyTips />
//         </div>
//       </div>
//       <section id="topalx-project">
//         <Topalx />
//       </section>
//       <section id="advice-slip-project">
//         <AdviceSlip />
//       </section>
//       <section id="joke-teller-project">
//         <JokeTeller />
//       </section>
//       <section id="todo-project">
//         <Todo />
//       </section>
//       <section id="figo-rest-project">
//         <FigoRest />
//       </section>
//       <section id="jogga-inter-project">
//         <JoggaInter />
//       </section>
//       <section id="csweb-project">
//         <Csweb />
//       </section>
//     </>
//   );
// };

// export default ProjectsPage;

import React from "react";
// import WeatherMini from "../../components/WeatherMini/WeatherMini";
// import TinyTips from "../../components/TinyTips/TinyTips";
// import GoToGithub from "../../components/GoToGithub/GoToGithub";
import css from "./ProjectsPage.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Separator from "../../components/Separator/Separator";

// Proiecte individuale
import Topalx from "../Topalx/Topalx";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import JokeTeller from "../JokeTeller/JokeTeller";
import Todo from "../ToDo/ToDo";
import FigoRest from "../FigoRest/FigoRest";
import JoggaInter from "../JoggaInter/JoggaInter";
import Csweb from "../Csweb/Csweb";
import Teilen from "../TeilenApp/Teilen";

// Importuri imagini
import cs1 from "../../images/cs1.webp";
import Top1 from "../../images/Top1.webp";
import i1 from "../../images/i1.webp";
import AdvicePic from "../../images/AdvicePic.webp";
import miniRobotPic from "../../images/miniRobotPic.webp";
import Todo1 from "../../images/Todo1.webp";
import figoPic1 from "../../images/figoPic1.webp";
import ttt1 from "../../images/ttt1.webp";

const imageMap = {
  cs1,
  ttt1,
  Top1,
  i1,
  AdvicePic,
  miniRobotPic,
  Todo1,
  figoPic1,
};
const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects = t("projectsPage.projects", { returnObjects: true });

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
        {/* <div>
          <WeatherMini />
        </div> */}
        <h1 className={css.proTitle}>{t("projectsPage.title")}</h1>
        <Separator />
        <div>
          <ul className={css.projectGrid}>
            {projects.map((project, index) => (
              <li
                key={index}
                className={css.projectCard}
                onClick={() => scrollToProject(project.id)}
              >
                <div
                  className={css.cardImage}
                  style={{
                    backgroundImage: `url(${imageMap[project.imageKey]})`,
                  }}
                >
                  <div className={css.overlay}>
                    <h3 className={css.projectTitle}>{project.name}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 
        <div>
          <TinyTips />
        </div> */}
      </div>

      <section id="csweb-project">
        <Csweb />
      </section>
      <section id="teilen">
        <Teilen />
      </section>
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
