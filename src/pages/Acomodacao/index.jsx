import { Body } from "./style"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Link } from "react-router-dom"

export function Acomodacao() {
  return (
    <>
      <Navbar/>
        <Body>
          Acomodação

          <main>
          <ul>
            <li>
              <Link to="/acomodacao/cadastro">Cadastrar acomodação</Link>
            </li>
            <li>
              <Link to="/acomodacao/remocao">Deletar acomodação</Link>
            </li>
            <li>
              <Link to="/acomodacao/listagem">Listar acomodação</Link>
            </li>
            <li>
              <Link to="/acomodacao/edicao">Editar acomodação</Link>
            </li>
          </ul>
        </main>
        </Body>
      <Footer/>
    </>
  )
}