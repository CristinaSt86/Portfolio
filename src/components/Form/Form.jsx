import React, { useState } from "react";
import css from "./Form.module.css";
import { useTheme } from "../../ThemeContext";
import FloatingLabel from "../FloatingLabel/FloatingLabel";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST data to Formspree
    const form = e.target;
    try {
      const response = await fetch("https://formspree.io/f/myyrrwal", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSubmissionMessage(t("form.successMessage"));
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmissionMessage(t("form.errorMessage"));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmissionMessage(t("form.networkErrorMessage"));
    }
  };

  const { theme } = useTheme();
  const formBgDarkMode =
    theme === "dark" ? `${css.form}  ${css.formNight}` : css.form;

  return (
    <form onSubmit={handleSubmit} className={formBgDarkMode}>
      <FloatingLabel
        id="name"
        name="name"
        type="text"
        maxLength="50"
        placeholder={t("form.namePlaceholder")}
        value={formData.name}
        onChange={handleInputChange}
      />
      <FloatingLabel
        id="email"
        name="email"
        type="email"
        maxLength="50"
        placeholder={t("form.emailPlaceholder")}
        value={formData.email}
        onChange={handleInputChange}
      />
      <FloatingLabel
        id="message"
        name="message"
        maxLength="500"
        placeholder={t("form.messagePlaceholder")}
        isTextArea={true}
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="submit" className={css.submitButton}>
        {t("form.submitButtonText")}
      </button>
      {submissionMessage && (
        <div className={css.submissionMessage}>{submissionMessage}</div>
      )}{" "}
    </form>
  );
};

export default Form;
