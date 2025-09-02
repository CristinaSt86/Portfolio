import React, { useState, useEffect, useRef } from "react";
import css from "./ServicesPage.module.css";
import { useTranslation } from "react-i18next";
import FlippCard from "../../components/FlippCard/FlippCard";
import { Icon } from "@iconify/react"; // ⬅️ Iconify
import Separator from "../../components/Separator/Separator";

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
      iconName: "mdi:account-group-outline",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "uiUxDesign",
      title: t("uiUxDesignTitle"),
      description: t("uiUxDesignDescription"),
      iconName: "mdi:draw-pen",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "spa",
      title: t("spaTitle"),
      description: t("spaDescription"),
      iconName: "mdi:cursor-default-click-outline",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "apiIntegration",
      title: t("apiIntegrationTitle"),
      description: t("apiIntegrationDescription"),
      iconName: "material-symbols:accessibility-new-rounded",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "formHandling",
      title: t("formHandlingTitle"),
      description: t("formHandlingDescription"),
      iconName: "mdi:code-tags",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "performanceOpt",
      title: t("performanceOptTitle"),
      description: t("performanceOptDescription"),
      iconName: "mdi:application-outline",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "versionControl",
      title: t("versionControlTitle"),
      description: t("versionControlDescription"),
      iconName: "mdi:api",
      flipIconName: "mdi:autorenew",
    },
    {
      key: "thirdPartyIntegration",
      title: t("thirdPartyIntegrationTitle"),
      description: t("thirdPartyIntegrationDescription"),
      iconName: "mdi:rocket-launch-outline",
      flipIconName: "mdi:autorenew",
    },
  ];

  return (
    <>
      <div id="services" className={css.placeholder}></div>
      <div className={css.services}>
        <h1 className={css.servicesTitle}>{t("servicesTitle")}</h1>
        <Separator />
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
                icon={<Icon icon={service.iconName} width="40" height="40" />}
                flipIcon={
                  <Icon icon={service.flipIconName} width="22" height="22" />
                }
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
