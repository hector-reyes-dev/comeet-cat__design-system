import React, { Component } from "react";
import Logo from "../Logo/index";
import { Nav, Link, Title, Subtitle } from "./styles";

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Logo />
        <Title>Asteroid</Title>
        <Subtitle>Design System</Subtitle>
        <Link to="/brand">Marca</Link>
        <Link to="/design-tokens">Design Tokens</Link>
        <Link to="/components">Components</Link>
      </Nav>
    );
  }
}

export default NavBar;
