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
        <Home path="/Comeet-Cat-Design-System" />
        <Brand path="/Comeet-Cat-Design-System/brand" />
        <WebDesign path="/Comeet-Cat-Design-System/web-design" />
        <DesignTokens path="/Comeet-Cat-Design-System/design-tokens" />
        <Components path="/Comeet-Cat-Design-System/components" />
        <ProjectManagment path="/Comeet-Cat-Design-System/project-managment" />
        <Contribution path="/Comeet-Cat-Design-System/contribution" />
      </Router>
    </Container>
  );
};
