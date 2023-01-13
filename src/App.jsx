import { useTranslation } from "react-i18next";
import { Button } from "./components/Button";
import { ContadorApp } from "./components/ContadorApp";

const App = () => {
  const { i18n } = useTranslation("global");

  const espanis = () => {
    i18n.changeLanguage("es");
  };
  const english = () => {
    i18n.changeLanguage("en");
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          padding: "5px",
          margin: "10px",
          background: "white",
        }}
        className="d-flex gap-1 rounded"
      >
        <Button color="primary" title="EN" funcion={english} />
        <Button color="success" title="ES" funcion={espanis} />
      </div>
      <ContadorApp />
    </div>
  );
};

export default App;
