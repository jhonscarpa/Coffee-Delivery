import { createContext, ReactNode, useEffect, useState } from 'react'
import { IPropsCoffee } from '../@types/coffee'

interface IPropsCoffeeContext {
  coffees: IPropsCoffee[]
  addNewCoffee: (newCoffee: IPropsCoffee) => void
  totalCoffeeInCart: number
  handleAddAmountCoffee: (updateAmount: IPropsCoffee) => void
  handleSubtractAmountCoffee: (updateAmount: IPropsCoffee) => void
  handleChangeUpdateCoffee: (updateAmount: IPropsCoffee) => void
  handleRemoveCoffeeShoppingCart: (id: string | number) => void
  handleFinish: () => void
}

export const CoffeesContext = createContext({} as IPropsCoffeeContext)

interface IPropsCoffeeContextProvider {
  children: ReactNode
}
export function CoffeesContextProvider({
  children,
}: IPropsCoffeeContextProvider) {
  const [coffees, setCoffees] = useState<IPropsCoffee[]>(() => {
    let initialState = localStorage.getItem('@coffee-delivery-1.0.0')
    if (initialState) {
      return (initialState = JSON.parse(initialState))
    } else {
      return []
    }
  })
  const totalCoffeeInCart = coffees.length

  useEffect(() => {
    localStorage.setItem('@coffee-delivery-1.0.0', JSON.stringify(coffees))
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

  function handleAddAmountCoffee(coffeeUpdate: IPropsCoffee) {
    let updateCoffee = coffees.map(coffee => {
      if (coffee.id === coffeeUpdate.id) {
        return { ...coffee, amount: coffee.amount + 1 }
      } else {
        return coffee
      }
    })

    setCoffees(updateCoffee)
  }
  function handleSubtractAmountCoffee(coffeeUpdate: IPropsCoffee) {
    let updateCoffee = coffees.map(coffee => {
      if (coffee.id === coffeeUpdate.id) {
        return { ...coffee, amount: coffee.amount - 1 }
      } else {
        return coffee
      }
    })

    setCoffees(updateCoffee)
  }
  function handleChangeUpdateCoffee(coffeeUpdate: IPropsCoffee) {
    let updateCoffee = coffees.map(coffee => {
      if (coffee.id === coffeeUpdate.id) {
        return { ...coffee, amount: coffeeUpdate.amount }
      } else {
        return coffee
      }
    })

    setCoffees(updateCoffee)
  }

  function handleRemoveCoffeeShoppingCart(id: string | number) {
    const newListCoffees = coffees.filter(coffee => coffee.id !== id)
    setCoffees(newListCoffees)
  }
  function handleFinish() {
    setCoffees([])
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        addNewCoffee,
        totalCoffeeInCart,
        handleAddAmountCoffee,
        handleSubtractAmountCoffee,
        handleChangeUpdateCoffee,
        handleRemoveCoffeeShoppingCart,
        handleFinish,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
