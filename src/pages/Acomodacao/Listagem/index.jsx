import { useEffect, useState } from "react"
import { Listar } from "./style"
import { Footer } from "../../../components/Footer"
import { Navbar } from "../../../components/Navbar"
import axios from "axios"
import { Link } from "react-router-dom"

export function Listagem () {
    const [acomodacoes, setAcomodacoes] = useState([])

    useEffect(() => {
        const acomodacoesSalvas = localStorage.getItem("acomodacoes");
        if (acomodacoesSalvas) {
          console.log("Local Storage Data:", JSON.parse(acomodacoesSalvas));
          setAcomodacoes(JSON.parse(acomodacoesSalvas));
        }
    }, []);

    return (
        <>
            <Navbar/>
            <Listar>
                <h2>Listagem de Acomodações</h2>

                {acomodacoes.length === 0 ? (
                    <p>Nenhuma acomodação cadastrada!</p>
                ) : (
                    <ul>
                        {acomodacoes.length && acomodacoes.map((acomodacao) => (
                            <li key={acomodacao.id}>
                                <strong>Nome:</strong> {acomodacao.nome}
                                <br />
                                <strong>Valor da Diária:</strong> R$ {acomodacao.valorDiaria}
                                <br />
                                <strong>Limite de Ocupantes:</strong> {acomodacao.limiteOcupantes}
                                <br />
                            </li>
                        ))}
                    </ul>
                )}
            </Listar>
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