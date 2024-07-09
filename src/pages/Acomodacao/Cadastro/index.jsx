import { DivForm, FormInput, Button } from "./style"
import React, { useState } from "react"
import { Footer } from "../../../components/Footer"
import { Navbar } from "../../../components/Navbar"
import axios from "axios"
import { Link } from "react-router-dom"

export function Cadastro () {

    const [nome, setNome] = useState('')
    const [valorDiaria, setValorDiaria] = useState('')
    const [limiteOcupantes, setLimiteOcupantes] = useState('')

    const handleChange = (event) => {
        const {name, value} = event.target
        if (name === 'nome') {
            if (typeof value === 'string') {
                setNome(value)
            } else {
                setNome(value.toString())
            }
        }
        else if (name === 'valorDiaria') setValorDiaria(parseFloat(value))
        else if (name === 'limiteOcupantes') setLimiteOcupantes(parseInt(value))
    
    // console.log('Dados do formulário:')
    // console.log('Nome:', nome)
    // console.log('Valor da Diária:', valorDiaria)
    // console.log('Limite de Ocupantes:', limiteOcupantes)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // enviar dados do formulário para pg Listagem (parâmetros URL)
        const data = {
            nome: nome,
            valorDiaria: valorDiaria,
            limiteOcupantes: limiteOcupantes,
        }

        localStorage.setItem("acomodacoes", JSON.stringify(data))

        setNome("")
        setValorDiaria(0)
        setLimiteOcupantes(0)

        alert("Acomodação cadastrada com sucesso!")
    }
    
    return (
        <>
            <Navbar/>
            <DivForm>
                <h2>Cadastro de Acomodação</h2>
                
                <label htmlFor="nome">Nome da Acomodação:</label>
                <FormInput type="text" id="nome" name="nome" value={nome} onChange={handleChange} required />

                <label htmlFor="valorDiaria">Valor da Diária:</label>
                <FormInput type="number" id="valorDiaria" name="valorDiaria" value={valorDiaria} onChange={handleChange} required />

                <label htmlFor="limiteOcupantes">Limite de Ocupantes:</label>
                <FormInput type="number" id="limiteOcupantes" name="limiteOcupantes" value={limiteOcupantes} onChange={handleChange} required />

                <Button type="submit" onClick={handleSubmit}>Cadastrar Acomocação</Button>
            </DivForm>
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