import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *{
        box-sizing: border-box;
        color: ${({ theme }) => theme.COLORS.YELLOW_YPUA};
        font-family: 'Inknut Antiqua', sans-serif;
        transform: scale(0.99);
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`