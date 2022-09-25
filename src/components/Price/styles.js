import styled from "styled-components";

export const Container = styled.span`
    font-size: 25px;
    padding: 5px 14px;
    max-height: 30px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({theme})=>theme.COLORS.BACKGROUND};
    background-color: ${({theme})=>theme.COLORS.TITLE_2};
    font-weight: 700;
    

    :hover{
        font-size: 30px;
        cursor: pointer;
    }
`;