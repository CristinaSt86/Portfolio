import React from "react";
import css from "./Modal.module.css";

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
