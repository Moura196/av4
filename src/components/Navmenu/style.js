import styled from "styled-components";

export const HamburgerMenu = styled.div`
  color: ${({ theme }) => theme.COLORS.RED_YPUA};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;`

export const DivMenuBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_YPUA};
`