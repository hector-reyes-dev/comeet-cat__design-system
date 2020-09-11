import React, { Fragment, Component } from "react";

import IconRow from "../../components/IconRow";

class IconsTable extends Component {
  render() {
    return (
      <Fragment>
        <IconRow icon="instagram" token="<Icon svg=instagram />" />
        <IconRow icon="behance" token="<Icon svg=behance />" />
        <IconRow icon="velocity" token="<Icon svg=velocity />" />
        <IconRow icon="github" token="<Icon svg=github />" />
        <IconRow icon="warning" token="<Icon svg=warning />" />
      </Fragment>
    );
  }
}

export default IconsTable;
