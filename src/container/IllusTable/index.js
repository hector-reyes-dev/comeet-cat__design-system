import React, { Component } from "react";

import { TableIllus, Illus, IllusItem } from "./styles";

import Ast01 from "../../images/Ast01.png";
import Ast02 from "../../images/Ast02.png";
import Ast03 from "../../images/Ast03.png";
import Ast04 from "../../images/Ast04.png";
import Ast05 from "../../images/Ast05.png";
import Ast06 from "../../images/Ast06.png";
import Ast07 from "../../images/Ast07.png";
import Ast09 from "../../images/Ast09.png";
import Ast10 from "../../images/Ast10.png";
import Ast11 from "../../images/Ast11.png";
import Ast12 from "../../images/Ast12.png";
import Ast13 from "../../images/Ast13.png";

class IllusTable extends Component {
  render() {
    return (
      <TableIllus>
        <IllusItem>
          <Illus src={Ast01} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast02} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast03} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast04} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast05} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast06} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast07} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>

        <IllusItem>
          <Illus src={Ast09} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast10} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast11} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast12} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
        <IllusItem>
          <Illus src={Ast13} alt="Asteroid" />
          <p>Asteroide</p>
        </IllusItem>
      </TableIllus>
    );
  }
}

export default IllusTable;
