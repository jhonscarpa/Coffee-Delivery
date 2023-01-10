import { ActionsContent, BackToHome, HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCoffees } from '../../hooks/useCoffees'
import { formSchemaType } from '../../pages/ShoppingCart'

export function Header() {
  const getAddrressUser = localStorage.getItem('coffeeDelivery-DataUser-0.0.1')
  const jsonAddressUser: formSchemaType = getAddrressUser
    ? JSON.parse(getAddrressUser)
    : null

  console.log(jsonAddressUser)
  const { totalCoffeeInCart } = useCoffees()
  return (
    <HeaderContainer>
      <BackToHome to="/" title="Voltar para a home">
        <img src={logoImg} alt="logo Coffee Delivery" />
      </BackToHome>
      <ActionsContent>
        {jsonAddressUser !== null ? (
          <p>
            <MapPin weight="fill" />
            {jsonAddressUser.city}, {jsonAddressUser.state}
          </p>
        ) : (
          <p>
            <MapPin weight="fill" />
            Não informado
          </p>
        )}
        <NavLink to="/carrinho" title="Carrinho de compras">
          <ShoppingCart weight="fill" />
          {totalCoffeeInCart > 0 && <span>{totalCoffeeInCart}</span>}
        </NavLink>
      </ActionsContent>
    </HeaderContainer>
  )
}
