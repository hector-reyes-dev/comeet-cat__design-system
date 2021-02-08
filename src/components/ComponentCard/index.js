import React, { Component } from "react";
import { CardComponent, CardComponentTitle, CarComponentWrap } from "./styles";

import Button from "../Button";

class ComponentCard extends Component {
  render() {
    return (
      <CardComponent>
        <CarComponentWrap></CarComponentWrap>
        <CardComponentTitle>{this.props.title}</CardComponentTitle>
        <p>{this.props.description}</p>
        <Button value="Ver Componente" url="/" />
      </CardComponent>
    );
  }
}

export default ComponentCard;
