import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`