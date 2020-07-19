import React, { Component, Fragment } from "react";

import TypoRow from "../../components/TypoRow";
import SecondarySubtitle from "../../components/SecondarySubtitle";

class TypoTable extends Component {
  render() {
    return (
      <Fragment>
        <SecondarySubtitle value="Familias Tipográficas" />
        <TypoRow
          title="Cunia"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$font-1: 'Cunia';"
        />
        <TypoRow
          title="Montserrat"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$font-2: 'Montserrat', sans-serif;"
        />
      </Fragment>
    );
  }
}

export default TypoTable;
