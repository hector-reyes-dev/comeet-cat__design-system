import React, { Component, Fragment } from "react";

import Code from "../Code";
import Line from "../Line";
import { RowTypo, TypoInfo, TypoInfoTitle } from "./styles.js";

class TypoRow extends Component {
  render() {
    return (
      <Fragment>
        <RowTypo>
          <TypoInfo>
            <TypoInfoTitle>{this.props.title}</TypoInfoTitle>
            <p>{this.props.description}</p>
          </TypoInfo>
          <Code code={this.props.token} />
        </RowTypo>
        <Line />
      </Fragment>
    );
  }
}

export default TypoRow;
