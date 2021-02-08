import React, { Component } from "react";
import { Heading } from "./styles";
import PrimaryLine from "../Line";

class Title extends Component {
  render() {
    return (
      <div>
        <Heading>{this.props.title}</Heading>
        <PrimaryLine />
      </div>
    );
  }
}

export default Title;
