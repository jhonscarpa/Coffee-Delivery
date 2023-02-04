import { useCoffees } from '../../../../hooks/useCoffees'
import { SelectedCoffee } from '../SelectedCoffee'
import ReactLoading from 'react-loading'
import {
  ButtonConfirmOrdem,
  Container,
  ContentValuesCoffees,
  ListCoffeesSelected,
  NoDataCoffee,
} from './styles'
import { Link } from 'react-router-dom'

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

  const generateDeliveryValue =
    coffees.length > 0 ? Math.fround(Math.random() * 5) + 1 : 0
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
        {coffees.length > 0 ? (
          coffees.map(coffee => (
            <SelectedCoffee coffee={coffee} key={coffee.id} />
          ))
        ) : (
          <NoDataCoffee>
            <h3>Você ainda não adicionou nenhum café a sua lista</h3>
            <Link to="/">Encontre o seu café preferido clicando aqui</Link>
          </NoDataCoffee>
        )}
      </ListCoffeesSelected>
      <ContentValuesCoffees>
        <p>
          Total de itens <span>{maskTotalValueCoffees}</span>
        </p>
        {coffees.length > 0 && (
          <p>
            Entrega <span>{maskGenerateDeliveryValue}</span>
          </p>
        )}
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
