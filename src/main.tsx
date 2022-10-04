import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createServer, Model } from "miragejs"
import { coffeesImg } from "./utils/coffeesImg"

createServer({
  models: {
    coffees: Model,
  },
  seeds(server) {
    server.db.loadData({
      coffees: [
        {
          id: 1,
          title: "Expresso Tradicional",
          type: ["TRADICIONAL"],
          description:
            "O tradicional café feito com água quente e grãos moídos",
          price: 9.9,
          imgURL: coffeesImg.expresso,
        },
        {
          id: 2,
          title: "Expresso Americano",
          type: ["TRADICIONAL"],
          description: "Expresso diluído, menos intenso que o tradicional",
          price: 9.9,
          imgURL: coffeesImg.expressoAmericano,
        },
        {
          id: 3,
          title: "Expresso Cremoso",
          type: ["TRADICIONAL"],
          description: "Café expresso tradicional com espuma cremosa",
          price: 9.9,
          imgURL: coffeesImg.expressoCremoso,
        },
        {
          id: 4,
          title: "Expresso Gelado",
          type: ["TRADICIONAL", "GELADO"],
          description: "Bebida preparada com café expresso e cubos de gelo",
          price: 9.9,
          imgURL: coffeesImg.cafeGelado,
        },
        {
          id: 5,
          title: "Café com Leite",
          type: ["TRADICIONAL", "COM LEITE"],
          description:
            "Meio a meio de expresso tradicional com leite vaporizado",
          price: 9.9,
          imgURL: coffeesImg.cafeComLeite,
        },
        {
          id: 6,
          title: "Latte",
          type: ["TRADICIONAL", "COM LEITE"],
          description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
          price: 9.9,
          imgURL: coffeesImg.latte,
        },
        {
          id: 7,
          title: "Capuccino",
          type: ["TRADICIONAL", "COM LEITE"],
          description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
          price: 9.9,
          imgURL: coffeesImg.capuccino,
        },
        {
          id: 8,
          title: "Macchiato",
          type: ["TRADICIONAL", "COM LEITE"],
          description:
            "Café expresso misturado com um pouco de leite quente e espuma",
          price: 9.9,
          imgURL: coffeesImg.macchiato,
        },
        {
          id: 9,
          title: "Mocaccino",
          type: ["TRADICIONAL", "COM LEITE"],
          description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
          price: 9.9,
          imgURL: coffeesImg.mochaccino,
        },
        {
          id: 10,
          title: "Chocolate Quente",
          type: ["ESPECIAL", "COM LEITE"],
          description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
          price: 9.9,
          imgURL: coffeesImg.chocolateQuente,
        },
        {
          id: 11,
          title: "Cubano",
          type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
          description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
          price: 9.9,
          imgURL: coffeesImg.cubano,
        },
        {
          id: 12,
          title: "Havaiano",
          type: ["ESPECIAL"],
          description: "Bebida adocicada preparada com café e leite de coco",
          price: 9.9,
          imgURL: coffeesImg.havaiano,
        },
        {
          id: 13,
          title: "Árabe",
          type: ["ESPECIAL"],
          description: "Bebida preparada com grãos de café árabe e especiarias",
          price: 9.9,
          imgURL: coffeesImg.arabe,
        },
        {
          id: 14,
          title: "Irlandês",
          type: ["ESPECIAL", "ALCOÓLICO"],
          description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
          price: 9.9,
          imgURL: coffeesImg.arabe,
        },
      ],
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/coffees", () => {
      return this.schema.all("coffees")
    })
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
