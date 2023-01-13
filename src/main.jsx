import React from "react";
import ReactDOM from "react-dom/client";
import ContadorProvider from "./context/ContadorProvider";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";
import global_englis from "./lenguajes/en/global.json";
import global_espanis from "./lenguajes/es/global.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_espanis,
    },
    en: {
      global: global_englis,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ContadorProvider>
  </React.StrictMode>
);
