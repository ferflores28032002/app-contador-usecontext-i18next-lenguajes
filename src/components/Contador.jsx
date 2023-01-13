import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ContadorContext } from "../context/ContadorContext";
import { Button } from "./Button";

export const Contador = () => {
  const { contador, aumentar, disminuir, reset } = useContext(ContadorContext);

  const { t } = useTranslation("global");

  return (
    <div className="d-flex flex-column p-4 rounded bg-light">
      <div className="text-center py-3 fs-5 shadow-xl text-dark">
        <h4>{t("title")}</h4>
        {contador}
      </div>
      <div className="d-flex gap-3">
        <Button color="primary" funcion={aumentar} title={t("+")} />
        <Button color="danger" funcion={disminuir} title={t("-")} />
        <Button color="success" funcion={reset} title={t("0")} />
      </div>
    </div>
  );
};
