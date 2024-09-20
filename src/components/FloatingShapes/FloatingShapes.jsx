import React from 'react';
import css from './FloatingShapes.module.css'; // Ensure to link the CSS file here

const FloatingShapes = () => {
  return (
    <div className={css.floatingShapes}>
      <div className={`${css.shape} ${css.circle}`}></div>
      <div className={`${css.shape} ${css.square}`}></div>
      <div className={`${css.shape} ${css.triangle}`}></div>
    </div>
  );
};

export default FloatingShapes;
