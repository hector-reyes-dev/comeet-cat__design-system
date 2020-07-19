import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Cunia';
  src: url('./fonts/cunia.eot'); /* IE9 Compat Modes */
  src: url('./fonts/cunia.eot?#iefix') format('embedded-opentype'),
    url('./fonts/cunia.otf') format('opentype'),
    url('./fonts/cunia.svg') format('svg'),
    url('./fonts/cunia.ttf') format('truetype'),
    url('./fonts/cunia.woff') format('woff'),
    url('./fonts/cunia.woff2') format('woff2'); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}

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
    li {
      margin: 8px;
    }
  }
`;
