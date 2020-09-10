import React, { Fragment } from "react";

import Title from "../components/Title";
import Intro from "../components/Intro";
import Subtitle from "../components/Subtitle";
import ColorTable from "../container/ColorTable";
import TypoTable from "../container/TypoTable";

import Icon from "../components/Icons/Icon";

export const DesignTokens = () => {
  return (
    <Fragment>
      <Title title="Design Tokens" />
      <Intro intro="Los Design Tokens son una forma independiente de la tecnología para almacenar variables. Utilizamos tokens en lugar de valores codificados para garantizar una mejor coherencia de la interfaz de usuario." />
      <Subtitle subtitle="Colores" />
      <p>
        Por coherencia, utilizamos la paleta de colores definida a
        continuaciónen toda nuestra interfaz.
      </p>
      <ColorTable />

      <Subtitle subtitle="Tipografía" />
      <p>
        Usa los siguientes tokens para establecer familias de fuentes, pesos y
        tamaños de letra de manera consistente.
      </p>
      <TypoTable />
      <Icon svg="instagram" title="Facebook" classes="svg-icon" />
      <Icon svg="github" title="Facebook" classes="svg-icon" />
      <Icon svg="velocity" title="Facebook" classes="svg-icon" />
      <Icon svg="warning" title="Facebook" classes="svg-icon" />
      <Icon svg="behance" title="Facebook" classes="svg-icon" />
    </Fragment>
  );
};
