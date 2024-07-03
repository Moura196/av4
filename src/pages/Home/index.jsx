import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Titulo } from "./style"

export function Home() {
  return (
    <>
      <Navbar/>
      <Titulo>
        Central de Reservas - Pousada Quinta do Ypuã
      </Titulo>
      <Footer/>
    </>
  )
}