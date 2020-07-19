import React, { Fragment } from "react";
import Title from "../components/Title";
import Intro from "../components/Intro";

import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import SecondarySubtitle from "../components/SecondarySubtitle";
import LogoDark from "../components/LogoDark";
import PrimaryLine from "../components/Line";

export const Brand = () => {
  return (
    <Fragment>
      <Title title="Marca" />
      <Intro intro="La marca Comeet Cat representa conocimiento, dinamismo y diversión. Creamos contenido y aplicaciones que incrementen el conocimiento de las personas. Aprende con Comeet Cat." />
      <Subtitle subtitle="Visión" />
      <p>
        Crear aplicaciones que comuniquen de forma entretenida y aporten a la
        pregnancia del conocimiento.
      </p>
      <PrimaryLine />

      <Subtitle subtitle="Principios de Diseño" />
      <PrimaryLine />

      <Subtitle subtitle="Terminología" />
      <p>
        Nuestra terminología se basa en la divulgación de conocimientos.
        Evitamos utilizar tecnisismos. Explicamos cada concepto de manera
        sencilla pero completa.
      </p>
      <PrimaryLine />

      <Subtitle subtitle="Imagotipo" />
      <LogoDark />
      <p>
        Nuestro imagotipo representa a un gatito en el lugar de un asteroide.
        Buscamos comunicar sencilles, diversión y amabilidad.{" "}
      </p>
      <SecondarySubtitle value="Descargas" />
      <Button value="Descargar" url="www.conejoestelar.com" />
      <PrimaryLine />
    </Fragment>
  );
};
