import { CurrencyCircleDollar, HouseSimple, Package, SignOut, UsersThree, Wrench } from "phosphor-react";
import { Footer, SidebarContainer } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <header>
        <h2>OS</h2>
      </header>
      <ul>
        <li>
          <a href="/dashboard">
            <HouseSimple />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/products">
            <Package />
            Produtos
          </a>
        </li>
        <li>
          <a href="/clients">
            <UsersThree />
            Clientes
          </a>
        </li>
        <li>
          <a href="/serviceOrder">
            <Wrench />
            Ordens de Serviço
          </a>
        </li>
        <li>
          <a href="/financial">
            <CurrencyCircleDollar />
            Financeiro
          </a>
        </li>
        {/* <li><a href="">Relatorios</a></li> */}
      </ul>

      <Footer >
        <button type="button"> 
          <SignOut />
          Sair
        </button>
      </Footer>
    </SidebarContainer>
  )
}