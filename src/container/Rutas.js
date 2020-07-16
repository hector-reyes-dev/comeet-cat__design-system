import React from "react";
import { Container } from "./styles";

import { Router } from "@reach/router";

import { Home } from "../pages/Home";
import { Brand } from "../pages/Brand";
import { WebDesign } from "../pages/WebDesign";
import { DesignTokens } from "../pages/DesignTokens";
import { Components } from "../pages/Components";
import { ProjectManagment } from "../pages/ProjectManagment";
import { Contribution } from "../pages/Contribution";

export const Rutas = () => {
  return (
    <Container>
      <Router>
        <Home path="/" />
        <Brand path="/brand" />
        <WebDesign path="/web-design" />
        <DesignTokens path="/design-tokens" />
        <Components path="/components" />
        <ProjectManagment path="/project-managment" />
        <Contribution path="/contribution" />
      </Router>
    </Container>
  );
};
