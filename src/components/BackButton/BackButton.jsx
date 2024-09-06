import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./BackButton.module.css";
import Image from "../Image/Image";
import backArrow from "../../images/backArrow.png";
import { useTheme } from "../../ThemeContext";
import useNavHistory from "../CustomHooks/useNavHistory";

const BackButton = () => {
  const navigate = useNavigate();
  const canGoBack = useNavHistory();
  const { theme } = useTheme();

  const handleBack = () => {
    navigate(-1);
  };

  const backBtnDarkMode =
    theme === "dark"
      ? `${css.handleBackBtn} ${css.handleBackBtnNight}`
      : css.handleBackBtn;

  if(!canGoBack) return null;


  return (
    <Image
      src={backArrow}
      alt="back-to-previous-page"
      onClick={handleBack}
      className={backBtnDarkMode}
    />
  );
};

export default BackButton;
