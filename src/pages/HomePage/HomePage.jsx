import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import Image from "../../components/Image/Image";
import Cris from "../../images/Cris.webp";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import GoToGithub from "../../components/GoToGithub/GoToGithub";
import { Helmet } from "react-helmet-async";
import AboutPage from "../AboutPage/AboutPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import Services from "../ServicesPage/ServicesPage";
import ContactPage from "../ContactPage/ContactPage";
// import FloatingShapes from "../../components/FloatingShapes/FloatingShapes";
// import Shapes from "../../components/Shapes/Shapes";

const HomePage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const imagineDark =
    theme === "dark" ? `${css.imagine} ${css.imagineNight} ` : css.imagine;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        name: "About",
        item: "https://cristinastoian-developer.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://cristinastoian-developer.com/projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://cristinastoian-developer.com/contact",
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Home Page | Cristina Stoian | Frontend Developer Portfolio
        </title>
        <meta
          name="description"
          content="Welcome to the homepage of my portfolio, showcasing my projects and skills."
        />
        <meta
          name="keywords"
          content="portfolio, frontend developer, web development, projects"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className={css.mainMaxWidth}>
        {/* <FloatingShapes />  */}
        {/* <Shapes /> */}
        <div id="home" className={css.flexHome}>
          <div
            className={`${css.mainContainer} ${isMounted ? css.animate : ""}`}
          >
            <Image
              src={Cris}
              alt={t("homePage.imageAlt")}
              className={`${imagineDark} ${css.imageAnimate}`}
            />

            <div className={`${css.introMore} ${css.textAnimate}`}>
              <h1 className={css.titlu}>{t("homePage.greeting")}</h1>
              <h2 className={css.subtitlu}>
                {" "}
                {/* You can use h4 instead of h3 if you prefer */}
                {t("homePage.introduction")}
              </h2>
              <GoToGithub
                onClick={scrollToAbout}
                text={t("homePage.readMore")}
                target="_self"
              />
            </div>
          </div>
        </div>
        <AboutPage />
        <ProjectsPage />
        <Services />
        <ContactPage />
      </div>
    </>
  );
};

export default HomePage;
