import styled from "styled-components"

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  width: 16rem;
  height: 19.375rem;
  align-items: center;
`
export const HeaderCardCoffee = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  gap: 0.75rem;
  img {
    display: flex;
    width: 7.5rem;
    height: 7.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    li {
      background: ${props => props.theme["yellow-light"]};
      color: ${props => props.theme["yellow-dark"]};
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 0.25rem 0.5rem;
      font: 700 0.625rem "Roboto", sans-serif;
    }
  }
`

export const ContentCoffee = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 1.25rem;
  align-items: center;
  text-align: center;

  h3 {
    font: 700 1.25rem "Baloo 2", sans-serif;
  }
  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
  }
`
