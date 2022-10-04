import { useContext } from "react"
import { CoffeesContext } from "../context/CoffeesContext"

export function useCoffees() {
  const context = useContext(CoffeesContext)
  return context
}
