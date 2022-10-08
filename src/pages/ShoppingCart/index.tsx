import { ColForm, FinishCoffeePurchase } from "./styles"
import { useForm, FormProvider } from "react-hook-form"
import { AddressForm } from "./components/AddressForm"

export function ShoppingCart() {
  const paymentForm = useForm()

  return (
    <FinishCoffeePurchase>
      <FormProvider {...paymentForm}>
        <ColForm>
          <strong>Complete seu pedido</strong>
          <AddressForm />
        </ColForm>
      </FormProvider>
    </FinishCoffeePurchase>
  )
}
