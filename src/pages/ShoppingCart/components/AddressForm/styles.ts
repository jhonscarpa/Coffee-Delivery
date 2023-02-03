import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  gap: 2rem;
  > header {
    display: flex;
    gap: 8px;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${props => props.theme['yellow-dark']};
    }

    h5 {
      font: 400 1rem 'Roboto', sans-serif;
      color: ${props => props.theme['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`
export const ContentForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .contentErrorInput {
    position: relative;
    display: flex;

    span {
      position: absolute;
      bottom: -5px;
      left: 10px;
      background: ${props => props.theme['base-input']};

      color: ${props => props.theme.error};
      padding: 0 0.5rem;
      font-size: 0.75rem;
    }
  }
`

export const RowInputForm = styled.div`
  display: flex;
  gap: 0.75rem;

  .contentOptional {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;

    i {
      position: absolute;
      right: 0.75rem;
      font-style: italic;
      font-size: 0.75rem;
      color: ${props => props.theme['base-label']};
    }
  }

  .contentCityAndUf {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .contentOptional i {
      font-size: 0.5rem;
    }
  }
`

interface IPropsBaseInput {
  suffix?: boolean
  isError: 'error' | 'success'
}

const isValidError: { error: 'error'; success: 'base-button' } = {
  error: 'error',
  success: 'base-button',
}

export const BaseInput = styled.input<IPropsBaseInput>`
  border-radius: 4px;
  padding: 0.75rem;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme[isValidError[props.isError]]};
  width: 100%;
  color: ${props => props.theme['base-text']};
  font-size: 0.875rem;
  padding-right: ${props => props.suffix && '4rem'};
  position: relative;

  ::placeholder {
    color: ${props => props.theme['base-label']};
    font-size: 0.875rem;
  }

  @media (max-width: 600px) {
    padding-right: ${props => props.suffix && '3rem'};
  }
`

export const ShortInput = styled(BaseInput)`
  width: 12.5rem;

  &.ufInput {
    max-width: 3.75rem !important;
  }

  @media (max-width: 600px) {
    max-width: none;
  }
`
