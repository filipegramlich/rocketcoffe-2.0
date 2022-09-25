import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: ${({theme})=> theme.COLORS.TITLE_1};
    color: ${({theme})=> theme.COLORS.WHITE};
    margin-bottom: 8px;
    border-radius: 10px;

    >input{
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme})=> theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder{
            color: ${({theme})=> theme.COLORS.TITLE_1};
        }
    }

    >svg{
        margin-left: 16px;
        }
    `
;