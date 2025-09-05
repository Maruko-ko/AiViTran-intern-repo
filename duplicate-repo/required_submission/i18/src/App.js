import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "Ivy" })}</p>

      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("es")}>Español</button>
    </div>
  );
}

export default App;
