import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Container, ContentForm, SelectedPaymentMethod } from './styles'


export function PaymentMethodForm() {
  const { register, watch } = useFormContext()

  const isActivePaymentMethod = watch('paymentMethod')

  return (
    <Container>
      <header>
        <CurrencyDollar />
        <div>
          <h5>Pagamento</h5>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </header>
      <ContentForm>
        <SelectedPaymentMethod
          htmlFor="creditCard"
          active={isActivePaymentMethod === 'creditCard'}
        >
          <CreditCard />
          CARTÃO DE CRÉDITO
        </SelectedPaymentMethod>
        <input
          type="radio"
          {...register('paymentMethod')}
          value="creditCard"
          id="creditCard"
          hidden
        />
        <SelectedPaymentMethod
          htmlFor="debitCard"
          active={isActivePaymentMethod === 'debitCard'}
        >
          <Bank />
          CARTÃO DE DÉBITO
        </SelectedPaymentMethod>
        <input
          type="radio"
          {...register('paymentMethod')}
          value="debitCard"
          id="debitCard"
          hidden
        />
        <SelectedPaymentMethod
          htmlFor="ticket"
          active={isActivePaymentMethod === 'ticket'}
        >
          <Money />
          DINHEIRO
        </SelectedPaymentMethod>
        <input
          type="radio"
          {...register('paymentMethod')}
          value="ticket"
          id="ticket"
          hidden
        />
      </ContentForm>
    </Container>
  )
}
