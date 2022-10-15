import {
  AddCartButton,
  ButtonInputAction,
  CardCoffeeContainer,
  ContentCoffee,
  ContentInput,
  FormBuyCoffee,
  HeaderCardCoffee,
} from "./styles"
import { IPropsCoffee } from "../../../../@types/coffee"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { FormEvent, useState } from "react"
import { useCoffees } from "../../../../hooks/useCoffees"

interface IPropsCardCoffee {
  coffee: IPropsCoffee
}

export function CardCoffee({ coffee }: IPropsCardCoffee) {
  const { addNewCoffee } = useCoffees()
  const [amountCoffee, setAmountCoffee] = useState<number>(1)

  const maskValueCoffee = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price)

  function handleAddCoffeeAmount() {
    setAmountCoffee(state => state + 1)
  }
  function handleRemoveCoffeeAmount() {
    setAmountCoffee(state => state - 1)
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    const newCoffee = {
      ...coffee,
      amount: amountCoffee,
    }
    console.log(newCoffee)
    addNewCoffee(newCoffee)
  }

  function handleChangeCoffeeAmount(event: FormEvent<HTMLInputElement>) {
    setAmountCoffee((event.target as HTMLInputElement).valueAsNumber)
  }

  return (
    <CardCoffeeContainer>
      <HeaderCardCoffee>
        <img src={coffee.imgURL} />

        <ul>
          {coffee.type.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </HeaderCardCoffee>
      <ContentCoffee>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </ContentCoffee>
      <FormBuyCoffee onSubmit={handleSubmitForm}>
        <strong>{maskValueCoffee}</strong>
        <div>
          <ContentInput>
            <ButtonInputAction
              type="button"
              onClick={handleRemoveCoffeeAmount}
              disabled={amountCoffee <= 1}
            >
              <Minus weight="bold" />
            </ButtonInputAction>
            <input
              type="number"
              min={1}
              value={amountCoffee}
              onChange={handleChangeCoffeeAmount}
            />
            <ButtonInputAction type="button" onClick={handleAddCoffeeAmount}>
              <Plus weight="bold" />
            </ButtonInputAction>
          </ContentInput>
          <AddCartButton type="submit">
            <ShoppingCart weight="fill" />
          </AddCartButton>
        </div>
      </FormBuyCoffee>
    </CardCoffeeContainer>
  )
}
