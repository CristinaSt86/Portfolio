// 


import React from "react";
import css from "./FlippCard.module.css";

const FlippCard = ({ title, description, icon, flipIcon, isFlipped, onFlip, cardKey }) => {
  const handleFlipping = () => {
    onFlip(cardKey);
  };

  return (
    <div onClick={handleFlipping}>
      <div className={`${css.card} ${isFlipped ? css.flipped : ""}`}>
        <div className={css.front}>
          {/* ✅ dacă e string → <img />, altfel randăm direct */}
          {typeof icon === "string" ? (
            <img src={icon} alt="" className={css.icon} />
          ) : (
            <div className={css.icon}>{icon}</div>
          )}

          <div className={css.title}>{title}</div>

          {typeof flipIcon === "string" ? (
            <img src={flipIcon} alt="flip icon" className={css.flip} />
          ) : (
            <div className={css.flip}>{flipIcon}</div>
          )}
        </div>

        <div className={css.back}>{description}</div>
      </div>
    </div>
  );
};

export default FlippCard;
