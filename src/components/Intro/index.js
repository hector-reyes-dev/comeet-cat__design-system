import React, { Component } from "react";
import { Introduction } from "./styles";

class Intro extends Component {
  render() {
    return <Introduction>{this.props.intro}</Introduction>;
  }
}

export default Intro;
