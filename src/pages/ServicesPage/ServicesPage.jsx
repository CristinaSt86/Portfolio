import React, { useState, useEffect, useRef } from "react";
import css from "./ServicesPage.module.css";
import { useTranslation } from "react-i18next";
import FlippCard from "../../components/FlippCard/FlippCard";
import code from "../../images/code.svg";
import edit from "../../images/editTool.svg";
import gitBranch from "../../images/gitBranch.svg";
import limitations from "../../images/limitations.svg";
import network from "../../images/network.svg";
import nodes from "../../images/nodes.svg";
import rocket from "../../images/rocket.svg";
import support from "../../images/support.svg";
import website from "../../images/website.svg";
import wrench from "../../images/wrench.svg";
import flipIcon from "../../images/flip.svg";

const Services = () => {
  const { t } = useTranslation();
  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flippedCard &&
        cardRefs.current[flippedCard] &&
        !cardRefs.current[flippedCard].contains(event.target)
      ) {
        setFlippedCard(null); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [flippedCard]);

  const handleCardFlip = (key) => {
    setFlippedCard((prevKey) => (prevKey === key ? null : key));
  };

  const services = [
    {
      key: "customWebDev",
      title: t("customWebDevTitle"),
      description: t("customWebDevDescription"),
      icon: code,
      flipIcon: flipIcon,
    },
    {
      key: "uiUxDesign",
      title: t("uiUxDesignTitle"),
      description: t("uiUxDesignDescription"),
      icon: edit,
      flipIcon: flipIcon,
    },
    {
      key: "spa",
      title: t("spaTitle"),
      description: t("spaDescription"),
      icon: nodes,
      flipIcon: flipIcon,
    },
    {
      key: "apiIntegration",
      title: t("apiIntegrationTitle"),
      description: t("apiIntegrationDescription"),
      icon: network,
      flipIcon: flipIcon,
    },
    {
      key: "formHandling",
      title: t("formHandlingTitle"),
      description: t("formHandlingDescription"),
      icon: website,
      flipIcon: flipIcon,
    },
    {
      key: "performanceOpt",
      title: t("performanceOptTitle"),
      description: t("performanceOptDescription"),
      icon: rocket,
      flipIcon: flipIcon,
    },
    {
      key: "versionControl",
      title: t("versionControlTitle"),
      description: t("versionControlDescription"),
      icon: gitBranch,
      flipIcon: flipIcon,
    },
    {
      key: "thirdPartyIntegration",
      title: t("thirdPartyIntegrationTitle"),
      description: t("thirdPartyIntegrationDescription"),
      icon: support,
      flipIcon: flipIcon,
    },
    {
      key: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      icon: wrench,
      flipIcon: flipIcon,
    },
    {
      key: "limitations",
      title: t("limitationsTitle"),
      description: t("limitationsDescription"),
      icon: limitations,
      flipIcon: flipIcon,
    },
  ];

  return (
    <>
      <div id="services" className={css.placeholder}></div>
      <div className={css.services}>
        <h1 className={css.servicesTitle}>{t("servicesTitle")}</h1>
        <div className={css.mainContainer}>
          {services.map((service) => (
            <div
              key={service.key}
              ref={(el) => (cardRefs.current[service.key] = el)}
            >
              <FlippCard
                cardKey={service.key}
                title={service.title}
                description={service.description}
                icon={service.icon}
                flipIcon={service.flipIcon}
                isFlipped={flippedCard === service.key}
                onFlip={handleCardFlip}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
