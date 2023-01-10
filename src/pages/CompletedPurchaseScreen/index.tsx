import { formSchemaType } from '../ShoppingCart'
import { Container, Content, ContentDataFinish } from './styles'
import motoboyImg from '../../assets/motoboy.svg'

export function CompletedPurchaseScreen() {
  const getDataUser = localStorage.getItem('coffeeDelivery-DataUser-0.0.1')
  const jsonDataUser: formSchemaType = getDataUser
    ? JSON.parse(getDataUser)
    : null
  return (
    <Container>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <Content>
        <ContentDataFinish></ContentDataFinish>
        <img src={motoboyImg} alt="Homem sentado em uma motocicleta com baú" />
      </Content>
    </Container>
  )
}
