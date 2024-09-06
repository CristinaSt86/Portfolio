// import React from "react";
// import css from "./HomePage.module.css";
// import Image from "../../components/Image/Image";
// import Cris from "../../images/Cris.png";
// import { useTheme } from "../../ThemeContext";
// import { useTranslation } from "react-i18next";
// import GoToGithub from "../../components/GoToGithub/GoToGithub";

// const HomePage = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();
//   const imagineDark =
//     theme === "dark" ? `${css.imagine} ${css.imagineNight} ` : css.imagine;

//   return (
//     <>
//       <div className={css.placeholder}></div>
//       <div className={css.mainContainer}>
//         <Image
//           src={Cris}
//           alt={t("homePage.imageAlt")}
//           className={imagineDark}
//         />
//         <div className={css.introMore}>
//           <h1 className={css.titlu}>
//             {t("homePage.greeting")}
//             <br />
//             {t("homePage.introduction")}
//           </h1>
//           <GoToGithub to="/about" text={t("homePage.readMore")} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import Image from "../../components/Image/Image";
import Cris from "../../images/Cris.png";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import GoToGithub from "../../components/GoToGithub/GoToGithub";

const HomePage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const imagineDark =
    theme === "dark" ? `${css.imagine} ${css.imagineNight} ` : css.imagine;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className={css.placeholder}></div>
      <div className={`${css.mainContainer} ${isMounted ? css.animate : ""}`}>
        <Image
          src={Cris}
          alt={t("homePage.imageAlt")}
          className={`${imagineDark} ${css.imageAnimate}`}
        />
        <div className={`${css.introMore} ${css.textAnimate}`}>
          <h1 className={css.titlu}>
            {t("homePage.greeting")}
            <br />
            {t("homePage.introduction")}
          </h1>
          <GoToGithub to="/about" text={t("homePage.readMore")} target="_self" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
