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

interface IPropsCardCoffee {
  coffee: IPropsCoffee
}

export function CardCoffee({ coffee }: IPropsCardCoffee) {
  const maskValueCoffee = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price)
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
      <FormBuyCoffee>
        <strong>{maskValueCoffee}</strong>
        <div>
          <ContentInput>
            <ButtonInputAction type="button">
              <Minus weight="bold" />
            </ButtonInputAction>
            <input type="number" min={1} defaultValue={1} />
            <ButtonInputAction type="button">
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
