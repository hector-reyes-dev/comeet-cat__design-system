import React, { Fragment } from "react";
import Title from "../components/Title";
import Intro from "../components/Intro";

export const Home = () => {
  return (
    <Fragment>
      <Title title="Bienvenido" />
      <Intro intro="Hola, soy una descripción muy cool" />
    </Fragment>
  );
};
