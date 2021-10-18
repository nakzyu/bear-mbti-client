import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
${reset};
body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    white-space: pre-wrap;
}
`;
