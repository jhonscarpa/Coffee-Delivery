import { ColForm, FinishCoffeePurchase } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { SelectedCoffeeForm } from './components/SelectedCoffeeForm'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCoffees } from '../../hooks/useCoffees'

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

export type formSchemaType = yup.InferType<typeof formSchema>

export function ShoppingCart() {
  const history = useNavigate()
  const { handleFinish } = useCoffees()

  const getDataUser = localStorage.getItem('coffeeDelivery-DataUser-0.0.1')
  const jsonDataUser: formSchemaType = getDataUser
    ? JSON.parse(getDataUser)
    : null

  const [loadingSubmitCoffee, setLoadingSubmitCoffee] = useState<boolean>(false)

  const paymentForm = useForm<formSchemaType>({
    resolver: yupResolver(formSchema),
  })

  const { handleSubmit, setValue } = paymentForm

  useEffect(() => {
    if (jsonDataUser) {
      //@ts-ignore
      setValue('city', jsonDataUser.city)
      //@ts-ignore
      setValue('complement', jsonDataUser.complement)
      //@ts-ignore
      setValue('neighborhood', jsonDataUser.neighborhood)
      //@ts-ignore
      setValue('number', jsonDataUser.number)
      //@ts-ignore
      setValue('paymentMethod', jsonDataUser.paymentMethod)
      //@ts-ignore
      setValue('zipCode', jsonDataUser.zipCode)
      //@ts-ignore
      setValue('state', jsonDataUser.state)
      //@ts-ignore
      setValue('street', jsonDataUser.street)
    }
  }, [])

  function submitCoffeeRequest(data: formSchemaType) {
    setLoadingSubmitCoffee(true)

    setTimeout(() => {
      setLoadingSubmitCoffee(false)
    }, 1000)
    localStorage.setItem('coffeeDelivery-DataUser-0.0.1', JSON.stringify(data))
    localStorage.setItem('@coffee-delivery-1.0.0', '[]')
    handleFinish()
    history('/finalizado')
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
