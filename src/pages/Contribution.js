import React, { Fragment } from "react";

import Title from "../components/Title";
import Intro from "../components/Intro";
import Subtitle from "../components/Subtitle";
import SecondarySubtitle from "../components/SecondarySubtitle";
import Button from "../components/Button";
import PrimaryLine from "../components/Line";
import Code from "../components/Code";

export const Contribution = () => {
  return (
    <Fragment>
      <Title title="Contribución" />
      <Intro
        intro="Agradecemos las contribuciones a Comeet Cat, eres libre de contribuir a este proyecto con las siguientes herramientas:
      "
      />
      <Button
        value="Github Repository"
        url="https://github.com/soyraffaello/comeet-cat"
      />
      <Button
        value="Figma Project"
        url="https://www.figma.com/file/YbqbeMuP86KX8xNceTOCXT/Comeet-Cat?node-id=79%3A234"
      />
      <PrimaryLine />

      <Subtitle subtitle="Instalación" />
      <p>
        Para instalar el proyecto en tu propio entorno de trabajo te
        recomendamos contar con Git, Node y NPM.
      </p>
      <SecondarySubtitle value="Descarga o clona el repositorio" />
      <p>Descarga el repositorio</p>
      <Button
        value="Descargar"
        url="https://github.com/soyraffaello/comeet-cat"
      />
      <p>Clona el repositorio</p>
      <Code code="git clone https://github.com/soyraffaello/comeet-cat" />
      <p>Instala el proyecto con </p>
      <Code code="npm install" />
      <p>Despliega el proyecto con </p>
      <Code code="npm start" />
    </Fragment>
  );
};
