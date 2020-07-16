import React, { Component } from "react";
import { Coding } from "./styles";

class Code extends Component {
  render() {
    return <Coding>{this.props.code}</Coding>;
  }
}

export default Code;
