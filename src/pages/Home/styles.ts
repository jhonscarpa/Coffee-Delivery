import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.25rem 10rem;
`
export const BannerCoffeeHome = styled.section`
  display: grid;
  grid-template-columns: 1fr 476px;
  gap: 3.5rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.125rem;
    h1 {
      font: 800 3rem "Baloo 2", sans-serif;
      color: ${props => props.theme["base-title"]};
      line-height: 130%;
    }

    span {
      font-size: 1.1rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
      font-stretch: 100;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ColBanner = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    gap: 2.5rem;
    width: 100%;

    li {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      align-items: center;
      min-width: 14.437rem;
    }
  }
`

const STATUS_COLOR = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const

export interface IPropsBenefit {
  backgroundColor: keyof typeof STATUS_COLOR
}

export const BenefitCoffee = styled.li<IPropsBenefit>`
  i {
    width: 2rem;
    height: 2rem;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: ${props => props.theme[STATUS_COLOR[props.backgroundColor]]};
    color: ${props => props.theme.white};
  }
`
export const ContentCoffeeList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const ListCoffee = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
`
