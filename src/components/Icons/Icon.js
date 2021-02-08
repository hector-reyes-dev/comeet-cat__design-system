import React from "react";
// Importamos nuestro objeto desde el archivo de íconos
import svgs from "./icons";
import "./icons.css";

const Icon = ({ svg, classes, click, title }) => {
  // Ingresaremos el nombre del ícono con la propiedad svg
  // de nuestro ícono en el objeto de íconos
  // Junto con una condicional para buscar el valor por
  // default que retornará null en caso de no encontrar coin svgs['default']
  // Estructura de un elemento SVG utilizando los datos de nuestro
  // archivo de íconos y las propiedades que le pasamos
  const svgRender = svgs[svg] || svgs.default;
  return (
    <svg
      viewBox={svgRender.viewBox}
      className={classes}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

export default Icon;
