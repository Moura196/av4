import styled from "styled-components";

export const Cabecalho = styled.nav `
  margin: 5px;
  padding: 5px;
`

export const Lista = styled.ul `
  background-color: ${({ theme }) => theme.COLORS.RED_YPUA};
  border-radius: 76px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  align-items: center;
  position: relative;
  vertical-align: middle;
`
export const ItemLista = styled.li `
  text-decoration: none;
  font-size: 1.2rem;
`