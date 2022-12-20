import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-between;

  .content {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`
export const CoffeeContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }
`
export const ContentInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  display: flex;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.theme["base-button"]};
  width: 100%;
  input {
    border: none;
    background: transparent;
    width: 1.25rem;

    text-align: center;
    font-size: 1rem;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;

  background: ${props => props.theme["base-button"]};
  border: none;
  font-size: 0.75rem;
  color: ${props => props.theme["base-text"]};
  align-items: center;

  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  :hover {
    background: ${props => props.theme["base-hover"]};
    color: ${props => props.theme["base-subtitle"]};

    svg {
      color: ${props => props.theme["purple-dark"]};
    }
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme.purple};
    transition: color 0.3s;
  }
`
export const Divider = styled.div`
  display: flex;
  width: 100%;

  height: 1px;
  background: ${props => props.theme["base-button"]};
  margin: 1.5rem 0;
`
