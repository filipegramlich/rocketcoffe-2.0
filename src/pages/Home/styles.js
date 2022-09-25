import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({theme})=>theme.COLORS.BACKGROUND};

    >div{
        display:flex;
        justify-content: space-around;
    }
`;