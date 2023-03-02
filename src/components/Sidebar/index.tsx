import { CurrencyCircleDollar, HouseSimple, Package, SignOut, UsersThree, Wrench } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import { Footer, SidebarContainer } from "./styles";

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <SidebarContainer>
      <header>
        <h2>OS</h2>
      </header>
      <ul>
        <li className={pathname.includes('dashboard') ? 'active' : ''}>
          <Link to="/dashboard">
            <HouseSimple />
            Dashboard
          </Link>
        </li>
        <li className={pathname.includes('products') ? 'active' : ''}>
          <Link to="/products">
            <Package />
            Produtos
          </Link>
        </li>
        <li className={pathname.includes('clients') ? 'active' : ''}>
          <Link to="/clients">
            <UsersThree />
            Clientes
          </Link>
        </li>
        <li className={pathname.includes('serviceOrder') ? 'active' : ''}>
          <Link to="/serviceOrder">
            <Wrench />
            Ordens de Serviço
          </Link>
        </li>
        <li className={pathname.includes('financial') ? 'active' : ''}>
          <Link to="/financial">
            <CurrencyCircleDollar />
            Financeiro
          </Link>
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