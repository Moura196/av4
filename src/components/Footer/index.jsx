import { Link } from "react-router-dom"
import { Cabecalho, Lista, ItemLista } from "./style"


export function Footer() {
  return (
    <>
      <Cabecalho>
        <Lista>
          <ItemLista><Link to="/">Finalizar Expediente</Link></ItemLista>
        </Lista>
      </Cabecalho>
    </>
  )
}