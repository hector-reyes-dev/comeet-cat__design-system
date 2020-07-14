import React from "react";
import { Container } from "./styles";

import { Home } from "../pages/Home";
import { Brand } from "../pages/Brand";
import { DesignTokens } from "../pages/DesignTokens";
import { Components } from "../pages/Components";

import { Router } from "@reach/router";

export const Rutas = () => {
  return (
    <Container>
      <Router>
        <Home path="/" />
        <Brand path="/brand" />
        <DesignTokens path="/design-tokens" />
        <Components path="/components" />
      </Router>
    </Container>
  );
};
