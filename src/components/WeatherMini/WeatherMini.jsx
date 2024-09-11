import React, { useState, useEffect } from "react";
import css from "./WeatherMini.module.css";
import { useTranslation } from "react-i18next";

const WeatherMini = () => {
  const { t } = useTranslation();
  const [weather, setWeather] = useState({
    main: {},
    weather: [{}],
    feels_like: {},
    wind: {},
  });
  const [city, setCity] = useState("Berlin");
  const [error, setError] = useState(null);
  const apiKey = "9593e8feaedbaedfb38ea35714625903";

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        if (!response || data.error) {
          throw new Error(
            data.message || "There was a problem fetching the weather data."
          );
        }
        if (!data || !data.weather || data.weather.length === 0) {
          throw new Error("Please enter a valid city name.");
        }
        setWeather(data);
        setError(null);
      } catch (error) {
        setError(`${error.message.replace("Error: ", "")}`);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getIntegerTemperature = (weatherData, property) => {
    if (weatherData && weatherData.main && weatherData.main[property]) {
      const temp = weatherData.main[property];

      const numericTemp = parseFloat(temp);

      return Math.floor(numericTemp);
    } else {
      return null;
    }
  };

  return (
    <div>
      <h3>{t('weatherMini.checkWeather')}</h3>
      <div className={css.mainContainer}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className={css.input}
        />

        {error ? (
          <p>{error}</p>
        ) : weather && weather.weather && weather.weather.length > 0 ? (
          <div className={css.weatherDetails}>
            <h1>{weather.name}</h1>
            <p className={css.paragraf}>{t('weatherMini.temperature')}{getIntegerTemperature(weather, "temp")}°C</p>
            <p  className={css.paragraf}>{t('weatherMini.feelsLike')}{getIntegerTemperature(weather, "feels_like")}°C</p>
            <p  className={css.paragraf}>{t('weatherMini.wind')}{weather?.wind?.speed} km/h</p>
            <p  className={css.paragraf}>{t('weatherMini.weather')}{weather?.weather[0]?.main}</p>
          </div>
        ) : (
          <p className={css.weatherMessage}>{t('weatherMini.loading')}</p>
        )}
      </div>
    </div>
  );
};

export default WeatherMini;
