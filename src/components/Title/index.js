import React, { Component } from "react";
import { Line, Heading } from "./styles";

class Title extends Component {
  render() {
    return (
      <div>
        <Heading>{this.props.title}</Heading>
        <Line />
      </div>
    );
  }
}

export default Title;
