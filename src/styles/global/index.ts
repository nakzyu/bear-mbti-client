import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
body {
    width:100vw;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    white-space: pre-wrap;
}`;

export default GlobalStyles;
