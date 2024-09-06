import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";

const GoToGithub = ({ to, text }) => {
  return (
    <Link to={to} className={css.Link} target="_blank">
      {text}
    </Link>
  );
};

export default GoToGithub;
