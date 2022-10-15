import { Minus, Plus, Trash } from "phosphor-react"
import { FormEvent } from "react"
import { IPropsCoffee } from "../../../../@types/coffee"
import { useCoffees } from "../../../../hooks/useCoffees"
import { ButtonInputAction } from "../../../Home/components/CardCoffee/styles"
import {
  CoffeeContent,
  Container,
  ContentInput,
  Divider,
  RemoveButton,
} from "./styles"

interface IPropsSelectedCoffee {
  coffee: IPropsCoffee
}

export function SelectedCoffee({ coffee }: IPropsSelectedCoffee) {
  const {
    handleAddAmountCoffee,
    handleSubtractAmountCoffee,
    handleChangeUpdateCoffee,
    handleRemoveCoffeeShoppingCart,
  } = useCoffees()

  function handleAddCoffee() {
    handleAddAmountCoffee(coffee)
  }
  function handleSubtractCoffee() {
    handleSubtractAmountCoffee(coffee)
  }
  function onChangeUpdateUpdateAmount(event: FormEvent<HTMLInputElement>) {
    const value = (event.target as HTMLInputElement).valueAsNumber
    handleChangeUpdateCoffee({
      ...coffee,
      amount: value,
    })
  }

  function handleRemoveCoffee() {
    handleRemoveCoffeeShoppingCart(coffee.id)
  }

  return (
    <>
      <Container>
        <img src={coffee.imgURL} />
        <CoffeeContent>
          {coffee.title}
          <div>
            <ContentInput>
              <ButtonInputAction
                type="button"
                onClick={handleSubtractCoffee}
                disabled={coffee.amount <= 1}
              >
                <Minus weight="bold" />
              </ButtonInputAction>
              <input
                type="number"
                min={1}
                value={coffee.amount}
                onChange={onChangeUpdateUpdateAmount}
              />
              <ButtonInputAction type="button" onClick={handleAddCoffee}>
                <Plus weight="bold" />
              </ButtonInputAction>
            </ContentInput>
            <RemoveButton type="button" onClick={handleRemoveCoffee}>
              <Trash />
              REMOVER
            </RemoveButton>
          </div>
        </CoffeeContent>
      </Container>
      <Divider />
    </>
  )
}
