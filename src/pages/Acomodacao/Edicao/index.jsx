import { Link } from "react-router-dom"
import { Footer } from "../../../components/Footer"
import { Navbar } from "../../../components/Navbar"

export function Edicao() {
    return (
        <>
            <Navbar/>
            <h2>Edição de Acomodações</h2>
            
            <main>
                <ul>
                    <li>
                        <Link to="/acomodacao">Voltar</Link>
                    </li>
                </ul>
            </main>
            <Footer/>
        </>
    )
}