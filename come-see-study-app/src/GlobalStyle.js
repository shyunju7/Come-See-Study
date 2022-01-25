import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`


${reset}
ul li {
    text-decoration : none;
}
body {
    font-size: 12px;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
}
`;
