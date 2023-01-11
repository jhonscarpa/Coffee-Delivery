import { formSchemaType } from '../ShoppingCart'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import motoboyImg from '../../assets/motoboy.svg'
import {
  Container,
  Content,
  ContentDataFinish,
  InfoDataDelivery,
} from './styles'

export function CompletedPurchaseScreen() {
  const getDataUser = localStorage.getItem('coffeeDelivery-DataUser-0.0.1')
  const jsonDataUser: formSchemaType = getDataUser
    ? JSON.parse(getDataUser)
    : null

  const generateForecastDeliveryMin = Math.floor(Math.random() * (20 - 10) + 10)
  const generateForecastDeliveryMax =
    Math.floor(Math.random() * (20 - 10) + 10) + generateForecastDeliveryMin

  function renderPaymentMethod() {
    if (jsonDataUser.paymentMethod === 'creditCard') {
      return 'Cartão de Crédito'
    }
    if (jsonDataUser.paymentMethod === 'debitCard') {
      return 'Cartão de Débito'
    }
    if (jsonDataUser.paymentMethod === 'ticket') {
      return 'Dinheiro'
    }
  }

  return (
    <Container>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <Content>
        <ContentDataFinish>
          <InfoDataDelivery type="LOCAL">
            <div className="contentIcon">
              <MapPin size={32} weight="fill" />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                {jsonDataUser.street}, {jsonDataUser.number}
              </strong>
              <br />
              {jsonDataUser.neighborhood} - {jsonDataUser.city},{' '}
              {jsonDataUser.state}
            </p>
          </InfoDataDelivery>
          <InfoDataDelivery type="FORECAST">
            <div className="contentIcon">
              <Timer size={32} weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <strong>
                {generateForecastDeliveryMin} min -{generateForecastDeliveryMax}{' '}
                min
              </strong>
            </p>
          </InfoDataDelivery>
          <InfoDataDelivery type="PAYMENT">
            <div className="contentIcon">
              <CurrencyDollar size={32} weight="fill" />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <strong>{renderPaymentMethod()}</strong>
            </p>
          </InfoDataDelivery>
        </ContentDataFinish>
        <img src={motoboyImg} alt="Homem sentado em uma motocicleta com baú" />
      </Content>
    </Container>
  )
}
