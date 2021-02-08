import React, { Component } from "react";
import { Sub } from "./styles";

class Subtitle extends Component {
  render() {
    return <Sub>{this.props.subtitle}</Sub>;
  }
}

export default Subtitle;
