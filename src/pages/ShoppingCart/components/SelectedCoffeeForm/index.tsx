import { useCoffees } from '../../../../hooks/useCoffees'
import { SelectedCoffee } from '../SelectedCoffee'
import ReactLoading from 'react-loading'
import {
  ButtonConfirmOrdem,
  Container,
  ContentValuesCoffees,
  ListCoffeesSelected,
} from './styles'

interface IPropsSelectedCoffee {
  loadingSubmitForm: boolean
}

export function SelectedCoffeeForm({
  loadingSubmitForm,
}: IPropsSelectedCoffee) {
  const { coffees } = useCoffees()

  const totalValueCoffees = coffees.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.amount
  }, 0)
  const maskTotalValueCoffees = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCoffees)

  const generateDeliveryValue = Math.fround(Math.random() * 5) + 1
  const maskGenerateDeliveryValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(generateDeliveryValue)

  const totalOrder = totalValueCoffees + generateDeliveryValue
  const maskTotalOrder = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalOrder)

  return (
    <Container>
      <ListCoffeesSelected>
        {coffees.map(coffee => (
          <SelectedCoffee coffee={coffee} key={coffee.id} />
        ))}
      </ListCoffeesSelected>
      <ContentValuesCoffees>
        <p>
          Total de itens <span>{maskTotalValueCoffees}</span>
        </p>
        <p>
          Entrega <span>{maskGenerateDeliveryValue}</span>
        </p>
        <p>
          <strong>Total</strong>
          <strong>{maskTotalOrder}</strong>
        </p>
      </ContentValuesCoffees>
      <ButtonConfirmOrdem type="submit" disabled={loadingSubmitForm}>
        {loadingSubmitForm ? (
          <ReactLoading type="balls" color="#FFF" height="1rem" width="1rem" />
        ) : (
          'Confirmar pedido'
        )}
      </ButtonConfirmOrdem>
    </Container>
  )
}
