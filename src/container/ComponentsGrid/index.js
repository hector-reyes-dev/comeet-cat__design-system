import React, { Component } from "react";
import { GridComponents } from "./styles";

import ComponentCard from "../../components/ComponentCard";

class TableComponents extends Component {
  render() {
    return (
      <GridComponents>
        <ComponentCard
          title="Card Principal"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
        <ComponentCard
          title="Card de Colaborador"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
        <ComponentCard
          title="Hero"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
        <ComponentCard
          title="Detalle Principal"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
        <ComponentCard
          title="Características"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
        <ComponentCard
          title="Footer"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        />
      </GridComponents>
    );
  }
}

export default TableComponents;
