import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useEffect, useState } from "react"
import { IPropsCoffee } from "../../@types/coffee"
import { api } from "../../services/api"
import { BannerCoffeeHome, BenefitCoffee, ColBanner, ContentCoffeeList, HomeContainer, ListCoffee } from "./styles"
import bannerImg from '../../assets/bannerHome.svg'
import { CardCoffee } from "./components/CardCoffee"

interface IPropsBenefitCoffeeList {
  content: string,
  icon: JSX.Element,
  color: 'yellowDark' | 'gray' | 'yellow' | 'purple'
}

const benefitCoffeeDelivery = [
  {
    content: 'Compra simples e segura',
    icon: <ShoppingCart weight="fill" />,
    color: 'yellowDark'
  },
  {
    content: 'Embalagem mantém o café intacto',
    icon: <Package weight="fill" />,
    color: 'gray'

  },
  {
    content: 'Entrega rápido e rastreada',
    icon: <Timer weight="fill" />,
    color: 'yellow'

  },
  {
    content: 'O café chega fresquinho até você',
    icon: <Coffee weight="fill" />,
    color: 'purple'

  },

] as IPropsBenefitCoffeeList[]



export function Home() {
  const [coffees, setCoffees] = useState<IPropsCoffee[]>([])
  useEffect(() => {
    api
      .get("coffees")
      .then(response => {

        setCoffees(response.data.coffees)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <HomeContainer>
      <BannerCoffeeHome>
        <ColBanner>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estver, a qualquer hora</span>
          </header>
          <ul>
            {benefitCoffeeDelivery.map(benefit => (
              <BenefitCoffee key={benefit.content} backgroundColor={benefit.color} ><i>{benefit.icon}</i>{benefit.content} </BenefitCoffee>
            ))}
          </ul>
        </ColBanner>
        <img src={bannerImg} alt="Um copo de café com os grãos do lado" />
      </BannerCoffeeHome>

      <ContentCoffeeList>
        <h1>Nossos cafés</h1>

        <ListCoffee>

          {coffees.map((coffee: IPropsCoffee) => (
            <li>
              <CardCoffee coffee={coffee} />

            </li>
          ))}
        </ListCoffee>
      </ContentCoffeeList>


    </HomeContainer>
  )
}
