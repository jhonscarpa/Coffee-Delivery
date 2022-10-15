import { ColForm, FinishCoffeePurchase } from "./styles"
import { useForm, FormProvider } from "react-hook-form"
import { AddressForm } from "./components/AddressForm"
import { PaymentMethodForm } from "./components/PaymentMethodForm"
import { SelectedCoffeeForm } from "./components/SelectedCoffeeForm"

export function ShoppingCart() {
  const paymentForm = useForm()
  const { handleSubmit } = paymentForm

  function submitCoffeeRequest(data: any) {
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
