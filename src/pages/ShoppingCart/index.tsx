import { ColForm, FinishCoffeePurchase } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { SelectedCoffeeForm } from './components/SelectedCoffeeForm'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

const formSchema = yup.object().shape({
  zipCode: yup.string().required('Informe o cep').min(9, 'CEP inválido'),
  street: yup.string().min(1, 'Informe a rua'),
  number: yup.number().min(1, 'Informe o número').typeError('Obrigatório'),
  complement: yup.string(),
  neighborhood: yup.string().min(1, 'Informe o bairro'),
  city: yup.string().min(1, 'Informe a cidade'),
  state: yup.string().min(2, 'Obrigatório').max(2, 'Estado invalido'),
  paymentMethod: yup
    .string()
    .required('Informe o tipo de pagamento')
    .typeError('Você precisa selecionar o tipo de pagamento'),

  // paymentMethod: "creditCard"
})

type formSchemaType = yup.InferType<typeof formSchema>

export function ShoppingCart() {
  const [loadingSubmitCoffee, setLoadingSubmitCoffee] = useState<boolean>(false)
  const paymentForm = useForm<formSchemaType>({
    resolver: yupResolver(formSchema),
  })
  const { handleSubmit } = paymentForm

  function submitCoffeeRequest(data: formSchemaType) {
    setLoadingSubmitCoffee(true)

    setTimeout(() => {
      setLoadingSubmitCoffee(false)
    }, 1000)
    console.log(data)
  }

  return (
    <FinishCoffeePurchase onSubmit={handleSubmit(submitCoffeeRequest)}>
      <FormProvider {...paymentForm}>
        <ColForm>
          <strong>Complete seu pedido</strong>
          <AddressForm />
          <PaymentMethodForm />
        </ColForm>
        <ColForm>
          <strong>Cafés selecionados</strong>
          <SelectedCoffeeForm loadingSubmitForm={loadingSubmitCoffee} />
        </ColForm>
      </FormProvider>
    </FinishCoffeePurchase>
  )
}
