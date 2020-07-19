import React, { Fragment } from "react";

import Title from "../components/Title";
import LogoDark from "../components/LogoDark";
import Intro from "../components/Intro";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import PrimaryLine from "../components/Line";

export const Home = () => {
  return (
    <Fragment>
      <Title title="Bienvenida Astronauta" />
      <Intro intro="Aterrizaste en la documentación de Comeet Cat. Se libre de explorar y utilizar este sistema a tu gusto. Gracias por utilizar Comeet Cat." />
      <LogoDark />
      <p>
        Comeet Cat es un sistema de visualización dinámica de asteroides,
        transformamos la información para ser comprendida.{" "}
        <strong>Disfruta Comeet Cat.</strong>
      </p>
      <PrimaryLine />
      <Subtitle subtitle="Todos nuestros enlaces principales:" />
      <Button
        value="Administración del Proyecto - Notion"
        url="https://www.notion.so/comeetcat/"
      />
      <Button
        value="Diseño de Interfaz - Figma"
        url="https://www.figma.com/file/YbqbeMuP86KX8xNceTOCXT/Comeet-Cat?node-id=79%3A234"
      />
      <Button
        value="Repositorio de código - Github"
        url="https://github.com/soyraffaello/comeet-cat"
      />
      <Subtitle subtitle="Repositorio al Sistema de Diseño:" />
      <Button
        value="Repositorio del Sistema de Diseño - Github"
        url="https://github.com/HectorDevx/Comeet-Cat-Design-System"
      />
    </Fragment>
  );
};
