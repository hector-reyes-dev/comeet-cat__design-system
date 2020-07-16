import React, { Component, Fragment } from "react";

import Code from "../Code";
import PrimaryLine from "../Line";
import {
  ColorInfoTitle,
  ColorInfo,
  ColorWrap,
  ColorContainer,
  RowColor,
} from "./styles";

class ColorRow extends Component {
  render() {
    const color = {
      backgroundColor: "red",
    };
    return (
      <Fragment>
        <RowColor>
          <ColorContainer>
            <ColorWrap style={color} />
            <p>HEX: {this.props.hex}</p>
            <p>rgb({this.props.rgb})</p>
          </ColorContainer>
          <ColorInfo>
            <ColorInfoTitle>{this.props.title}</ColorInfoTitle>
            <p>{this.props.description}</p>
          </ColorInfo>
          <Code code={this.props.token} />
        </RowColor>
        <PrimaryLine />
      </Fragment>
    );
  }
}

export default ColorRow;
