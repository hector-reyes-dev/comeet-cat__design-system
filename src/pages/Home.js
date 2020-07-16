import React, { Fragment } from "react";

import Title from "../components/Title";
import LogoDark from "../components/LogoDark";
import Subtitle from "../components/Subtitle";
import Intro from "../components/Intro";
import Button from "../components/Button";
import SecondarySubtitle from "../components/SecondarySubtitle";

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

      <Subtitle subtitle="Visión" />
      <p>
        Crear aplicaciones que comuniquen de forma entretenida y aporten a la
        pregnancia del conocimiento.{" "}
      </p>

      <Subtitle subtitle="Principios de Diseño" />

      <Subtitle subtitle="Terminología" />
      <p>
        Crear aplicaciones que comuniquen de forma entretenida y aporten a la
        pregnancia del conocimiento.{" "}
      </p>

      <Subtitle subtitle="Imagotipo" />
      <LogoDark />
      <SecondarySubtitle value="Descargas" />
      <Button value="Descargar" url="www.conejoestelar.com" />
    </Fragment>
  );
};
