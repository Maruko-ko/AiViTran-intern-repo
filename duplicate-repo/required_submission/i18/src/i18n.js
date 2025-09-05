import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my app!",
      greeting: "Hello, {{name}}!"
    }
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi aplicación!",
      greeting: "¡Hola, {{name}}!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
