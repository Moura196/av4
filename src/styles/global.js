import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *{
        margin: 5px;
        padding: 5px;
        box-sizing: border-box;
        color: ${({ theme }) => theme.COLORS.YELLOW_YPUA};
        font-family: 'Inknut Antiqua', sans-serif;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`