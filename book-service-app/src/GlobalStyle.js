import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`


${reset}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
ul li {
    text-decoration : none;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}
`;
