import { Link } from "react-router-dom"
import { Footer } from "../../../components/Footer"
import { Navbar } from "../../../components/Navbar"

export function Remocao() {
    return (
        <>
            <Navbar/>
            <h2>Remoção de Acomodações</h2>

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