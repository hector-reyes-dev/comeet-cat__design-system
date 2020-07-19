import React, { Component, Fragment } from "react";

import ColorRow from "../../components/ColorRow";
import SecondarySubtitle from "../../components/SecondarySubtitle";

class ColorTable extends Component {
  render() {
    return (
      <Fragment>
        <SecondarySubtitle value="Colores Primarios" />
        <ColorRow
          hex="#FEBC78"
          rgb="254, 188, 120"
          title="Yellow"
          description="Utilizamos el color amarillo para resaltar los mensajes más importantes. Nos permite comunicar los conceptos de luz y energía."
          token="$primary-yellow: #febc78;"
        />
        <ColorRow
          hex="#FF5A6B"
          rgb="200, 55, 107"
          title="Red"
          description="El color rojo nos ayuda a crear el máximo contraste con los colores azules y morados. Lo utilizamos para guiar la atención del usuario y comunicarle conceptos como energia y precaución."
          token="$primary-red: #ff5a6b;"
        />
        <ColorRow
          hex="#C8377F"
          rgb="200, 55, 127"
          title="Pink"
          description="El color rosa... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$primary-pink: #c8377f;"
        />
        <ColorRow
          hex="#7424C9"
          rgb="116, 36, 201"
          title="Purple"
          description="El color morado...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$primary-purple: #7424c9;"
        />
        <ColorRow
          hex="#FFFFFF"
          rgb="255, 255, 255"
          title="White"
          description="El color blanco...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$primary-white: #ffffff;"
        />
        <SecondarySubtitle value="Colores Secundarios" />
        <ColorRow
          hex="#B353FF"
          rgb="179, 83, 255"
          title="Light Purple"
          description="El color morado brillante...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$secondary-purple: #b353ff;"
        />
        <ColorRow
          hex="#49C0FF"
          rgb="73, 192, 255"
          title="Light Purple"
          description="El color morado brillante...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          token="$secondary-blue: #49c0ff;"
        />
        <SecondarySubtitle value="Degradados" />
      </Fragment>
    );
  }
}

export default ColorTable;
