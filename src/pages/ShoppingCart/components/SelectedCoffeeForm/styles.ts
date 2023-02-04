import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
  overflow-y: auto;
  max-height: 498px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`

export const ListCoffeesSelected = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ContentValuesCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    span {
      font-size: 1rem;
      font-weight: 400;
    }

    strong {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
      padding: 0;
    }
  }
`

export const ButtonConfirmOrdem = styled.button`
  background: ${props => props.theme.yellow};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: 0px;

  color: ${props => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  transition: background-color 0.3s;
  cursor: pointer;
  :hover {
    background: ${props => props.theme['yellow-dark']};
  }
`
export const NoDataCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`
