import { IPropsCoffee } from "../../@types/coffee"

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
}

export function addNewCoffee(newCoffee: IPropsCoffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}
