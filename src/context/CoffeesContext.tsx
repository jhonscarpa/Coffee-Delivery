import { createContext, ReactNode, useState } from "react"
import { IPropsCoffee } from "../@types/coffee"

interface IPropsCoffeeContext {
  coffees: IPropsCoffee[]
  addNewCoffee: (newCoffee: IPropsCoffee) => void
}

export const CoffeesContext = createContext({} as IPropsCoffeeContext)

interface IPropsCoffeeContextProvider {
  children: ReactNode
}
export function CoffeesContextProvider({
  children,
}: IPropsCoffeeContextProvider) {
  const [coffees, setCoffees] = useState<IPropsCoffee[]>([])

  function addNewCoffee(newCoffee: IPropsCoffee) {
    const isCoffeeAlreadyExists = coffees.findIndex(coffee => coffee.id === newCoffee.id)

    if (isCoffeeAlreadyExists) {
      setCoffees(state => {
        state[isCoffeeAlreadyExists].amount = state[isCoffeeAlreadyExists].amount + 1
        return state
      })
    } else {
      setCoffees(state => {
        return [...state, newCoffee]
      })
    }
  }

  return (
    <CoffeesContext.Provider value={{ coffees, addNewCoffee }}>
      {children}
    </CoffeesContext.Provider>
  )
}
