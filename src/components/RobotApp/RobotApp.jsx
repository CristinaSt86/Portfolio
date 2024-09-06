import React, { useState } from "react";
import css from "./RobotApp.module.css";
import { useTranslation } from "react-i18next";
import robot from "../../images/robotGif.gif";

const RobotApp = () => {
  const [joke, setJoke] = useState("");
  const { t, i18n } = useTranslation();

  const speakJoke = (joke) => {
    const speech = new SpeechSynthesisUtterance(joke);
    speech.lang = i18n.language.startsWith("de") ? "de-DE" : "en-US";
    window.speechSynthesis.speak(speech);
  };

  const cleanJoke = (jokeText) => {
    return jokeText.replace(/[^\w\s,.!?'"-]/gi, "");
  };

  const fetchJoke = async () => {
    const language = i18n.language.startsWith("de") ? "de" : "en";
    const url = `https://v2.jokeapi.dev/joke/Programming?lang=${language}&blacklistFlags=nsfw,racist,sexist,explicit`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      let jokeText =
        data.type === "twopart"
          ? `${data.setup} ... ${data.delivery}`
          : data.joke;
      jokeText = cleanJoke(jokeText);
      setJoke(jokeText);
      speakJoke(jokeText);
    } catch (error) {
      console.log("Fetching data failed", error);
      setJoke(t("jokeTellerPage.errorFetchingJoke"));
    }
  };

  const stopJoke = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className={css.blueContainer}>
      <div className={css.btnContainer}>
        <button onClick={fetchJoke} className={css.pinkBtn}>
          {t("jokeTellerPage.buttons.tellJoke")}
        </button>
        <button onClick={stopJoke} className={css.pinkBtn}>
          {t("jokeTellerPage.buttons.stopJoke")}
        </button>
      </div>
      <img src={robot} alt={t("jokeTellerPage.imageAlt")} className={css.robotImg} />
      <p className={css.jokePara}>{joke || t("jokeTellerPage.noJoke")}</p>
    </div>
  );
};

export default RobotApp;
