import React, { Component } from "react";

import ColorRow from "../../components/ColorRow";

class ColorTable extends Component {
  render() {
    return (
      <section>
        <ColorRow
          hex="#FEBC78"
          rgb="254, 188, 120"
          title="Yellow"
          description="Soy la descripción del color amarillo."
          token="$primary-yellow: #febc78;"
        />
      </section>
    );
  }
}

export default ColorTable;
