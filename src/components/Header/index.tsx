import { ActionsContent, HeaderContainer } from "./styles"
import logoImg from "../../assets/logo.svg"
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="logo Coffee Delivery" />
      <ActionsContent>
        <p>
          <MapPin weight="fill" />
          Taubaté, SP
        </p>
        <NavLink to="#" title="Carrinho de compras">
          <ShoppingCart weight="fill" />
        </NavLink>
      </ActionsContent>
    </HeaderContainer>
  )
}
