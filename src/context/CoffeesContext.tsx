import { createContext, ReactNode, useEffect, useState } from "react"
import { IPropsCoffee } from "../@types/coffee"

interface IPropsCoffeeContext {
  coffees: IPropsCoffee[]
  addNewCoffee: (newCoffee: IPropsCoffee) => void
  totalCoffeeInCart: number
}

export const CoffeesContext = createContext({} as IPropsCoffeeContext)

interface IPropsCoffeeContextProvider {
  children: ReactNode
}
export function CoffeesContextProvider({
  children,
}: IPropsCoffeeContextProvider) {
  const [coffees, setCoffees] = useState<IPropsCoffee[]>(() => {
    let initialState = localStorage.getItem("@coffee-delivery-1.0.0")
    if (initialState) {
      return (initialState = JSON.parse(initialState))
    } else {
      return []
    }
  })
  const totalCoffeeInCart = coffees.length

  useEffect(() => {
    localStorage.setItem("@coffee-delivery-1.0.0", JSON.stringify(coffees))
  }, [coffees])

  function addNewCoffee(newCoffee: IPropsCoffee) {
    const isCoffeeAlreadyExists = coffees.findIndex(
      coffee => coffee.id === newCoffee.id,
    )

    if (isCoffeeAlreadyExists >= 0) {
      setCoffees(state => {
        state[isCoffeeAlreadyExists].amount =
          state[isCoffeeAlreadyExists].amount + newCoffee.amount
        return state
      })
    } else {
      setCoffees(state => {
        return [...state, newCoffee]
      })
    }
  }

  return (
    <CoffeesContext.Provider
      value={{ coffees, addNewCoffee, totalCoffeeInCart }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
