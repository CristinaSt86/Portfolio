import React, { useState, useEffect } from "react";
import css from "./TinyTips.module.css";
import ellipse from "../../images/ellipse.webp";
import divDesk from "../../images/pattern-divider-desktop.svg";
import divMob from "../../images/pattern-divider-mobile.svg";
import iconDice from "../../images/icon-dice.svg";
import { useTranslation } from "react-i18next";

const TinyTips = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [hasLoadedAdvice, setHasLoadedAdvice] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setAdvice(t("tinyTips.rollForNewAdvice"));
  }, [t]);

  const fetchAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(`${t("tinyTips.TinyTipsTitle")}${data.slip.id}`);
      setHasLoadedAdvice(true);
    } catch (error) {
      console.error("Fetching data failed", error);
      setAdvice(t("tinyTips.fetchError"));
    }
  };

  return (
    <div className={css.container}>
      <h6 className={css.adviceNo} id="advice-no">
        {adviceId}
      </h6>
      <p className={css.paragraph}>{`"${advice}"`}</p>

      <img
        src={ellipse}
        alt={t("tinyTips.ellipseAlt")}
        className={css.cercVerde}
      />
      <img
        src={divDesk}
        alt={t("tinyTips.divDeskAlt")}
        className={`${css.design} ${css.desktop}`}
      />
      <img
        src={divMob}
        alt={t("tinyTips.divMobAlt")}
        className={`${css.design} ${css.mobile}`}
      />
      <button className={css.zar} onClick={fetchAdvice}>
        <img src={iconDice} alt={t("tinyTips.rollForNewAdvice")} />
      </button>
    </div>
  );
};

export default TinyTips;
