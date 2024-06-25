import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en";
import hi from "@/locales/hi";
import ta from "@/locales/ta";

const resources = {
  en,
  hi,
  ta,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ta", // Set default language here
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
