import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;

  margin: 0 auto;

  .divider {
    height: 6.25rem;
    @media (max-width: 768px) {
      height: 3.75rem;
    }
  }
`
