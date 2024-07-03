import { useRef } from "react"
import { Cabecalho, Lista, ItemLista } from "./style"
import { useOutsideClick } from "./useOutsideClick";


export function Navmenu() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
    <>
      <Cabecalho>
        <Lista>
          <ItemLista><img src="/src/images/logo-pousada-quinta-do-ypua 2.svg" alt="Logo Quinta de Ypuã" /></ItemLista>
          <ItemLista>Colocar o nome da entidade</ItemLista>
          <ItemLista>
            <button onClick={onClick}>
              <img className="img_" src="/src/images/Group 2.svg" alt="Menu para navegação"/>
            </button>

            <nav 
              ref={dropDownRef} 
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <a href="../../pages/Acomodacao/Cadastro">Cadastro</a>
                </li>
                <li>
                  <a href="../../pages/Acomodacao/Listagem">Listagem</a>
                </li>
                <li>
                  <a href="../../pages/Acomodacao/Edicao">Edição</a>
                </li>
                <li>
                  <a href="../../pages/Acomodacao/Remocao">Remoção</a>
                </li>
              </ul>
            </nav>
          </ItemLista>
        </Lista>
      </Cabecalho>
    </>
  )
}