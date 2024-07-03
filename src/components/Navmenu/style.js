import styled from "styled-components";

export const Cabecalho = styled.nav `
  margin: 20px;
  padding: 20px;
  display: contents;
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
  /* margin: 5px;
  padding: 5px; */

 > img .img_{
    height: 80px;
    width: 80px;
    align-content: center;
 } 

 > nav .active {
    opacity: 1;
    visibility: visible;
 }
`