import React, { Component } from "react";
import { SecondarySub } from "./styles";

class SecondarySubtitle extends Component {
  render() {
    return <SecondarySub>{this.props.value}</SecondarySub>;
  }
}

export default SecondarySubtitle;
