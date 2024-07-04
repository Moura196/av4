import { Link } from "react-router-dom"
import { Cabecalho, Lista, ItemLista } from "./style.js"
import { Navmenu } from "../Navmenu/index.jsx"

export function Navbar() {
  return (
    <>
      <Cabecalho>
        <Lista>
          <ItemLista>
            <Link to="/home">
              <img src="/src/images/logo-pousada-quinta-do-ypua 2.svg" alt="Logo Quinta de Ypuã" />
            </Link>
          </ItemLista>
          <ItemLista><Link to="/estabelecimento">Estabelecimento</Link></ItemLista>
          <ItemLista><Link to="/acomodacao">Acomodação</Link></ItemLista>
          <ItemLista><Link to="/funcionario">Funcionário</Link></ItemLista>
          <ItemLista><Link to="/hospede">Hóspede</Link></ItemLista>
          <ItemLista><Link to="/reserva">Reserva</Link></ItemLista>
          <ItemLista><Navmenu/></ItemLista>
        </Lista>
      </Cabecalho>
    </>
  )
}