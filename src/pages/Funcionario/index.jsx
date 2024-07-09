import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Titulo } from "./style";


export function Funcionario() {
  return (
    <>      
      <Navbar/>
        <Titulo>
          Funcionario - Malfatti
        </Titulo>

        <main>
          <ul>
            <li>
              <Link to="/funcionario/create">Cadastrar funcionario</Link>
            </li>
            <li>
              <Link to="/funcionario/delete">Deletar funcionario</Link>
            </li>
            <li>
              <Link to="/funcionario/read">Listar funcionarios</Link>
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
