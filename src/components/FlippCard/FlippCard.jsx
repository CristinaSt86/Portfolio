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
          <img src={icon} alt="" className={css.icon} />
          {title}
          <img src={flipIcon} alt="flip icon" className={css.flip} />
        </div>

        <div className={css.back}>{description}</div>
      </div>
    </div>
  );
};

export default FlippCard;
