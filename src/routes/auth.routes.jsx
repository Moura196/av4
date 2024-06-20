import { Routes, Route } from "react-router-dom";

import { Estabelecimento } from "../pages/Estabelecimento";
import { Acomodacao } from "../pages/Acomodacao";
import { Funcionario } from "../pages/Funcionario";

export function AuthRoutes(){
    return(
        <Routes>

            {/* <Route path="/" element={<Home/>}/> */}

            <Route path="/estabelecimento" element={<Estabelecimento/>}/>
            <Route path="/acomodacao" element={<Acomodacao/>}/>
            <Route path="/funcionario" element={<Funcionario/>}/>
            {/*
                <Route path="/hospede" element={<Hospede/>}/>
                <Route path="/reserva" element={<Reserva/>}/>
            */}
           
            
        </Routes>
    )
}

