import { Contador } from "./Contador";

export const ContadorApp = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#3b82f6",
      }}
      className="d-flex  justify-content-center align-items-center border"
    >
      <Contador />
    </div>
  );
};
