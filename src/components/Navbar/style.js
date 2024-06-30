import styled from "styled-components";

export const Cabecalho = styled.nav `
.navbar {
  margin: 5px;
  padding: 5px;
}
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

 > img {
    height: 80px;
    width: 80px;
 } 
`
    // export const StyledImage = styled.img `

// `
// .navbar-item a:hover {
//   text-decoration: underline;
// }