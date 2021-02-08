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
        <Home path="/comeet-cat__design-system/" />
        <Brand path="/comeet-cat__design-system/brand" />
        <WebDesign path="/comeet-cat__design-system/web-design" />
        <DesignTokens path="/comeet-cat__design-system/design-tokens" />
        <Components path="/comeet-cat__design-system/components" />
        <ProjectManagment path="/comeet-cat__design-system/project-managment" />
        <Contribution path="/comeet-cat__design-system/contribution" />
      </Router>
    </Container>
  );
};
