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
`

export const ListCoffeesSelected = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ContentValuesCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

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
