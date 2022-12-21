import { ColForm, FinishCoffeePurchase } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { SelectedCoffeeForm } from './components/SelectedCoffeeForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const formSchema = zod.object({
  zipCode: zod.string().min(9, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.optional(zod.string()),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o estado').max(2, 'Estado invalido'),

  // paymentMethod
  // :
  // "creditCard"
})

type formSchemaType = zod.infer<typeof formSchema>

export function ShoppingCart() {
  const paymentForm = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })
  const { handleSubmit } = paymentForm

  function submitCoffeeRequest(data: formSchemaType) {
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
          <SelectedCoffeeForm />
        </ColForm>
      </FormProvider>
    </FinishCoffeePurchase>
  )
}
