import React from "react";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { Layout } from "./components/Styles/Layout";

import NavBar from "./components/NavBar/index";
import { Rutas } from "./container/Rutas";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <NavBar />
        <Rutas />
      </Layout>
    </div>
  );
}

export default App;
