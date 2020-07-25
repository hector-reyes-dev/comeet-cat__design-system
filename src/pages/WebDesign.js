import React, { Fragment } from "react";

import Title from "../components/Title";
import Intro from "../components/Intro";
import SecondarySubtitle from "../components/SecondarySubtitle";
import Button from "../components/Button";

export const WebDesign = () => {
  return (
    <Fragment>
      <Title title="Diseño Web" />
      <Intro intro="Arquitectura de información, Wireframing y prototipado de la aplicación." />
      <SecondarySubtitle value="Diseño de Interfaz" />
      <Button
        value="Diseño de Interfaz - Figma"
        url="https://www.figma.com/file/YbqbeMuP86KX8xNceTOCXT/Comeet-Cat?node-id=79%3A234"
      />
    </Fragment>
  );
};
