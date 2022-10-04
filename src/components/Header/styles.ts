import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2.06rem 10rem;
  flex-direction: row;
  justify-content: space-between;
`

export const ActionsContent = styled.div`
  display: flex;
  gap: 0.75rem;

  p {
    display: flex;
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;
    align-items: center;
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    font-size: 0.875rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${props => props.theme.purple};
    }
  }

  a {
    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme["yellow-light"]};
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${props => props.theme["yellow-dark"]};
    }
  }
`
