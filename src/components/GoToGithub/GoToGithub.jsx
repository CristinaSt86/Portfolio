import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";

const GoToGithub = ({ to, text, target = "_blank", additionalClasses, children, ...rest }) => {
  return (
    <Link
      to={to}
      className={`${css.Link} ${additionalClasses || ""}`}
      target={target}
      {...rest}  // Spread any additional props, like `rel`
    >
      {children ? children : text}  {/* If children are provided, render them, otherwise use text */}
    </Link>
  );
};

export default GoToGithub;
