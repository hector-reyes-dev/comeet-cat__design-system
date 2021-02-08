import React, { Fragment, Component } from "react";

import Icon from "../Icons/Icon";
import Code from "../Code";
import { IconRowStyle } from "./styles";

class IconRow extends Component {
  render() {
    return (
      <Fragment>
        <IconRowStyle>
          <h4>{this.props.icon}</h4>
          <Icon svg={this.props.icon} title="Facebook" classes="svg-icon" />
          <Code code={this.props.token} />
        </IconRowStyle>
      </Fragment>
    );
  }
}

export default IconRow;
