import { Link } from "react-router-dom"
import { Cabecalho, Lista, ItemLista } from "./style.js"

export function Navbar() {
  return (
    <>
      <Cabecalho>
        <Lista>
          <ItemLista><img src="/src/images/logo-pousada-quinta-do-ypua 2.svg" alt="Logo Quinta de Ypuã" /></ItemLista>
          <ItemLista><Link to="/estabelecimento">Estabelecimento</Link></ItemLista>
          <ItemLista><Link to="/acomodacao">Acomodação</Link></ItemLista>
          <ItemLista><Link to="/funcionario">Funcionário</Link></ItemLista>
          <ItemLista><Link to="/hospede">Hóspede</Link></ItemLista>
          <ItemLista><Link to="/reserva">Reserva</Link></ItemLista>
        </Lista>
      </Cabecalho>
    </>
  )
}