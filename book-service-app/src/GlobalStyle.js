import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`


${reset}

ul li {
    text-decoration : none;
}
body {
    margin: 0;
    padding: 0;
}
`;
