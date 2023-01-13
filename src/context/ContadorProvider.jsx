import Swal from "sweetalert2";
import { useState } from "react";
import { ContadorContext } from "./ContadorContext";

const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };
  const disminuir = () => {
    if (contador <= 0) {
      setContador(0);
      Swal.fire(
        "Lo sentimos",
        "No puede disminuir más el contador",
        "warning"
      );
    } else {
      setContador(contador - 1);
    }
  };
  const reset = () => {
    setContador( 0 );
  };

  return (
    <ContadorContext.Provider
      value={{
        contador,
        aumentar,
        disminuir,
        reset,
      }}
    >
      {children}
    </ContadorContext.Provider>
  );
};

export default ContadorProvider;
