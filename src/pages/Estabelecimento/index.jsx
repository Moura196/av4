import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Titulo } from "./style"

export function Estabelecimento() {
  return (
    <>      
      <Navbar/>
        <Titulo>
          Estabelecimento - Bruno
        </Titulo>

        <main>
          <ul>
            <li>
              <Link to="/estabelecimento/cadastro">Cadastrar estabelecimento</Link>
            </li>
            <li>
              <Link to="/home">Voltar</Link>
            </li>
          </ul>
        </main>
      <Footer/> 
    </>
  )
}