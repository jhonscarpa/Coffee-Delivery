import styled from 'styled-components'

export const FinishCoffeePurchase = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  padding: 2.5rem 10rem;
  gap: 2rem;
  @media (max-width: 768px) {
    padding: 2.5rem 4rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`

export const ColForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  strong {
    margin-bottom: 1rem;
    font: 700 1.125rem 'Baloo 2', sans-serif;
  }
`
