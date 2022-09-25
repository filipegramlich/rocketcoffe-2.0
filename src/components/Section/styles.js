import styled from "styled-components";

export const Container = styled.section`
    font-weight: 700;
    margin-top:90px;
    max-width: 350px;
    
    >h1{
        font-size: 30px;
        font-family: 'Roboto Serif, serif';
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_2};
        color: ${({theme})=>theme.COLORS.TITLE_1};
        text-align: center;
        padding-bottom: 2px;
    }
    
    `
;