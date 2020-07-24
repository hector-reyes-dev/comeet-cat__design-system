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

        <PrimaryLink to="/Comeet-Cat-Design-System/brand">Marca</PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/brand">
          Visión
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/brand">
          Principios de Diseño
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/brand">
          Terminología
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/brand">
          Imagotipo
        </SecondaryLink>

        <PrimaryLink to="/Comeet-Cat-Design-System/web-design">
          Diseño Web
        </PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/web-design">
          Figma
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/web-design">
          Herramientas
        </SecondaryLink>

        <PrimaryLink to="/Comeet-Cat-Design-System/design-tokens">
          Design Tokens
        </PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/design-tokens">
          Colores
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/design-tokens">
          Tipografía
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/design-tokens">
          Ilustraciones
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/design-tokens">
          Iconografia
        </SecondaryLink>

        <PrimaryLink to="/Comeet-Cat-Design-System/components">
          Componentes
        </PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/components">
          Principales
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/components">
          Contenedores
        </SecondaryLink>

        <PrimaryLink to="/Comeet-Cat-Design-System/project-managment">
          Proyecto
        </PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/project-managment">
          Roadmap
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/project-managment">
          Hitos
        </SecondaryLink>

        <PrimaryLink to="/Comeet-Cat-Design-System/contribution">
          Contribución
        </PrimaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/contribution">
          Repositorio de Git
        </SecondaryLink>
        <SecondaryLink to="/Comeet-Cat-Design-System/contribution">
          Instalación
        </SecondaryLink>
      </Nav>
    );
  }
}

export default NavBar;
