import { CardCoffeeContainer, ContentCoffee, HeaderCardCoffee } from './styles';
import { IPropsCoffee } from '../../../../@types/coffee'


interface IPropsCardCoffee {
  coffee: IPropsCoffee
}

export function CardCoffee({ coffee }: IPropsCardCoffee) {
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



    </CardCoffeeContainer>
  );
}