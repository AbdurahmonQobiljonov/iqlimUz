import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Uz from "./translateToUzbek.json";
import Ru from "./translateToRussio.json";

const resources = {
  uz: {
    translation: Uz,
  },
  ru: {
    translation: Ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
