import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 5rem 10rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    h1 {
      font: 800 2rem 'Balloo 2', sans-serif;
      color: ${props => props.theme['yellow-dark']};
    }
    p {
      font: 400 1.25rem 'Roboto', sans-serif;
      color: ${props => props.theme['base-subtitle']};
      font-stretch: 100;
    }
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const ContentDataFinish = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${props => props.theme.white};
  border: 1px;
  width: 100%;
  max-width: 32.875rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

const styleBackgroundIcon = {
  LOCAL: 'purple',
  FORECAST: 'yellow',
  PAYMENT: 'yellow-dark',
} as const

interface IPropsInfoDataDelivery {
  type: keyof typeof styleBackgroundIcon
}

export const InfoDataDelivery = styled.div<IPropsInfoDataDelivery>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  .contentIcon {
    background: ${props => props.theme[styleBackgroundIcon[props.type]]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${props => props.theme.white};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${props => props.theme['base-text']};

      strong {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`
