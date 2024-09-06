import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";

const GoToGithub = ({ to, text, target = "_blank" }) => {
  return (
    <Link to={to} className={css.Link} target={target}>
      {text}
    </Link>
  );
};

export default GoToGithub;
