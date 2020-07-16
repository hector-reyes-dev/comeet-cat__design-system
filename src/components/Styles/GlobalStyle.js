import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    color: #342951;
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }
`;
