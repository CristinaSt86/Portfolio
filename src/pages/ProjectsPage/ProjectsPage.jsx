import React, { useEffect } from "react";
import css from "./ProjectsPage.module.css";
import WeatherMini from "../../components/WeatherMini/WeatherMini";
import { useTranslation } from "react-i18next";
import TinyTips from "../../components/TinyTips/TinyTips";
import { Helmet } from "react-helmet-async";
import GoToGithub from "../../components/GoToGithub/GoToGithub";

const ProjectsPage = () => {
  const { t } = useTranslation();

  const proiecte = t("projectsPage.projects", { returnObjects: true });

  useEffect(() => {}, []);

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

      <div className={css.mainContainer}>
        <div>
          <WeatherMini />
        </div>
        <hr />
        <div>
          <ul className={css.ulLinks}>
            {proiecte.map((project, index) => (
              <li key={index}>
                <GoToGithub
                  to={project.path}
                  target="_self"
                  additionalClasses={`${css.proBtn} ${
                    index % 2 === 0 ? css.slideInLeft : css.slideInRight
                  }`}
                >
                  {project.name}
                </GoToGithub>
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
