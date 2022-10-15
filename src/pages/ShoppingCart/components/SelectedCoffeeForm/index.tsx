import { useCoffees } from "../../../../hooks/useCoffees"
import { SelectedCoffee } from "../SelectedCoffee"
import { Container } from "./styles"

export function SelectedCoffeeForm() {
  const { coffees } = useCoffees()
  return (
    <Container>
      {coffees.map(coffee => (
        <SelectedCoffee coffee={coffee} key={coffee.id} />
      ))}
    </Container>
  )
}
