import styled from "styled-components";

export const Titulo = styled.h1`
    color: ${({ theme }) => theme.COLORS.RED_YPUA};

`
export const Cabecalho = styled.nav`
.navbar {
    background-color: #A03B3B;
    padding: 1rem;
}
`

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`
export const ItemLista = styled.li`
  color: #D2AE6D;
  text-decoration: none;
  font-size: 1.2rem;
`

// .navbar-item a:hover {
//   text-decoration: underline;
// }