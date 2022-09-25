import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;

    >h1{
        color: ${({theme})=>theme.COLORS.TITLE_1};
        font-size: 38px;
    }
    >h1 span{
        color: ${({theme})=>theme.COLORS.TITLE_2};
    }
    >p{
        font-size: 18px;
    }
`;