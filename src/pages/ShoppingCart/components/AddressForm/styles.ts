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
      color: ${props => props.theme["yellow-dark"]};
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
export const ContentForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const RowInputForm = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;
  align-items: center;

  i {
    position: absolute;
    right: 0.75rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${props => props.theme["base-label"]};
  }
`

interface IPropsBaseInput {
  suffix?: boolean
}

export const BaseInput = styled.input<IPropsBaseInput>`
  border-radius: 4px;
  padding: 0.75rem;
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  width: 100%;
  color: ${props => props.theme["base-text"]};
  font-size: 0.875rem;
  padding-right: ${props => props.suffix && "4rem"};

  ::placeholder {
    color: ${props => props.theme["base-label"]};
    font-size: 0.875rem;
  }
`

export const ShortInput = styled(BaseInput)`
  max-width: 12.5rem;

  &.ufInput {
    max-width: 3.75rem;
  }
`
