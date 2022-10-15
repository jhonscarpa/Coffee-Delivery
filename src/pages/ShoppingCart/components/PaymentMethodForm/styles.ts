import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  gap: 2rem;

  > header {
    display: flex;
    gap: 8px;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${props => props.theme.purple};
    }

    h5 {
      font: 400 1rem "Roboto", sans-serif;
      color: ${props => props.theme["base-subtitle"]};
    }
    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-text"]};
    }
  }
`

export const ContentForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`

interface IPropsSelectedPaymentMEthod {
  active: boolean
}

export const SelectedPaymentMethod = styled.label<IPropsSelectedPaymentMEthod>`
  width: 100%;
  max-width: 11.1rem;
  display: flex;
  background: ${props =>
    props.active ? props.theme["purple-light"] : props.theme["base-button"]};
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  align-items: center;
  transition: background-color 0.3s;
  cursor: pointer;
  border: ${props =>
    props.active ? `1px solid ${props.theme.purple}` : "1px solid transparent"};

  svg {
    color: ${props => props.theme.purple};
    width: 1rem;
    height: 1rem;
  }

  :hover {
    background: ${props => props.theme["base-hover"]};
  }
`
