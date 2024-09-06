import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import de from "./locales/de.json";
import ro from "./locales/ro.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user language
  .init({
    resources: {
      en: {
        translation: en, // assign the imported en JSON
      },
      de: {
        translation: de, // assign the imported de JSON
      },
      ro: {
        translation: ro,
      },
    },
    supportedLngs: ["en", "de", "ro"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
