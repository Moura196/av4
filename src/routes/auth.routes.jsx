import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Estabelecimento } from "../pages/Estabelecimento";
import { Acomodacao } from "../pages/Acomodacao";
import { Funcionario } from "../pages/Funcionario";
import { Hospede } from "../pages/Hospede";
import { Reserva } from "../pages/Reserva";
import { CreateFuncionario } from "../pages/Funcionario/Create"; 

export function AuthRoutes(){
    return(
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/estabelecimento" element={<Estabelecimento/>}/>
            <Route path="/acomodacao" element={<Acomodacao/>}/>
            <Route path="/funcionario" element={<Funcionario/>}/>
            <Route path="/funcionario/create" element={<CreateFuncionario />} />
            <Route path="/hospede" element={<Hospede/>}/>
            <Route path="/reserva" element={<Reserva/>}/>

        </Routes>
    );
}
