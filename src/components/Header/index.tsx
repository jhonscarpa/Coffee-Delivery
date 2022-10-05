import { ActionsContent, HeaderContainer } from "./styles"
import logoImg from "../../assets/logo.svg"
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useCoffees } from "../../hooks/useCoffees"

export function Header() {
  const { totalCoffeeInCart } = useCoffees()
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
          {totalCoffeeInCart > 0 && <span>{totalCoffeeInCart}</span>}
        </NavLink>
      </ActionsContent>
    </HeaderContainer>
  )
}
