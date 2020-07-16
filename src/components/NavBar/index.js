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

        <PrimaryLink to="/brand">Marca</PrimaryLink>
        <SecondaryLink to="/brand">Visión</SecondaryLink>
        <SecondaryLink to="/brand">Principios de Diseño</SecondaryLink>
        <SecondaryLink to="/brand">Terminología</SecondaryLink>
        <SecondaryLink to="/brand">Imagotipo</SecondaryLink>

        <PrimaryLink to="/web-design">Diseño Web</PrimaryLink>
        <SecondaryLink to="/web-design">Figma</SecondaryLink>
        <SecondaryLink to="/web-design">Herramientas</SecondaryLink>

        <PrimaryLink to="/design-tokens">Design Tokens</PrimaryLink>
        <SecondaryLink to="/design-tokens">Colores</SecondaryLink>
        <SecondaryLink to="/design-tokens">Tipografía</SecondaryLink>
        <SecondaryLink to="/design-tokens">Ilustraciones</SecondaryLink>
        <SecondaryLink to="/design-tokens">Iconografia</SecondaryLink>

        <PrimaryLink to="/components">Componentes</PrimaryLink>
        <SecondaryLink to="/components">Principales</SecondaryLink>
        <SecondaryLink to="/components">Contenedores</SecondaryLink>

        <PrimaryLink to="/project-managment">Proyecto</PrimaryLink>
        <SecondaryLink to="/project-managment">Roadmap</SecondaryLink>
        <SecondaryLink to="/project-managment">Hitos</SecondaryLink>

        <PrimaryLink to="/contribution">Contribución</PrimaryLink>
        <SecondaryLink to="/contribution">Repositorio de Git</SecondaryLink>
        <SecondaryLink to="/contribution">Instalación</SecondaryLink>
      </Nav>
    );
  }
}

export default NavBar;
