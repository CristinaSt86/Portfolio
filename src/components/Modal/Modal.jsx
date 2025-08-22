import React, { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div
        className={css.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Închide"
          className={css.closeButton}
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
