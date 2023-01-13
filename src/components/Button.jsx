export const Button = ({ color, funcion, title }) => {
  return (
    <button className={`btn btn-${color}`} onClick={funcion}>
      {title}
    </button>
  );
};
