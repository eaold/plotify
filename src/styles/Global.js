import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { Styles} from "./index";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: ${Styles.font.family};
  }
  main {
    width: 90%;
    margin: 0 auto;
  }
  `;
