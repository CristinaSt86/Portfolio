import React from "react";
import css from "./Header.module.css";
//import BackButton from "../BackButton/BackButton";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";


const Header = () => {
  return (
    <div className={css.headerContainer}>
      <div className={css.logoCont}>
        {/* <BackButton /> */}
        <Link to="/">
          <img src={logo} alt="logo" className={css.logo} />
        </Link>
      </div>
      <div className={css.langThemeContainer}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
