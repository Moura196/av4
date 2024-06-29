import styled from "styled-components";

export const Titulo = styled.h1 `
    // Sobre o que está escrito
    color: ${({ theme }) => theme.COLORS.YELLOW_YPUA};
    margin: 5px;
    padding: 5px;
    text-align: center;
    font-family: 'Inknut Antiqua', sans-serif;
    font-size: small;

    // Sobre a cor de fundo
    background-color: ${({ theme }) => theme.COLORS.RED_YPUA};
    /* filter: alpha(opacity=17);
    opacity: 0.17; */
    border-radius: 76px;

`