import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        font-family: 'Roboto Serif, serif';
        font-weight: 700;
    }

    input{
        font-family: 'Roboto', 'sans-serif';
        font-size:20px;
    }

    p{
        font-family: 'Roboto', 'sans-serif';
        font-weight: 400;
    }
`;