import { createGlobalStyle } from "styled-components";

import RubikBold from "./Rubik-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik-Bold';
        src: url('${RubikBold}) format('ttf');
    }
    
`;
