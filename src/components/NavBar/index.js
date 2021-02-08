import React, { Component } from "react";
import Logo from "../Logo/index";
import { Nav, PrimaryLink, SecondaryLink, Title, Subtitle } from "./styles";

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Logo />
        <Title>Asteroid</Title>
        <Subtitle>Documentación</Subtitle>

        <PrimaryLink to="/comeet-cat__design-system/brand">Marca</PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/brand">
          Visión
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/brand">
          Principios de Diseño
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/brand">
          Terminología
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/brand">
          Imagotipo
        </SecondaryLink>

        <PrimaryLink to="/comeet-cat__design-system/web-design">
          Diseño Web
        </PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/web-design">
          Figma
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/web-design">
          Herramientas
        </SecondaryLink>

        <PrimaryLink to="/comeet-cat__design-system/design-tokens">
          Design Tokens
        </PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/design-tokens">
          Colores
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/design-tokens">
          Tipografía
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/design-tokens">
          Ilustraciones
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/design-tokens">
          Iconografia
        </SecondaryLink>

        <PrimaryLink to="/comeet-cat__design-system/components">
          Componentes
        </PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/components">
          Principales
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/components">
          Contenedores
        </SecondaryLink>

        <PrimaryLink to="/comeet-cat__design-system/project-managment">
          Proyecto
        </PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/project-managment">
          Roadmap
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/project-managment">
          Hitos
        </SecondaryLink>

        <PrimaryLink to="/comeet-cat__design-system/contribution">
          Contribución
        </PrimaryLink>
        <SecondaryLink to="/comeet-cat__design-system/contribution">
          Repositorio de Git
        </SecondaryLink>
        <SecondaryLink to="/comeet-cat__design-system/contribution">
          Instalación
        </SecondaryLink>
      </Nav>
    );
  }
}

export default NavBar;
