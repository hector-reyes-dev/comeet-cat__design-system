import React, { Component } from "react";
import { Btn } from "./styles";

class Button extends Component {
  render() {
    return (
      <a target="_blank" rel="noopener noreferrer" href={this.props.url}>
        <Btn>{this.props.value}</Btn>
      </a>
    );
  }
}

export default Button;
