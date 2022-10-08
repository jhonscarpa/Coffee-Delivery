import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2.06rem 10rem;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.background};
  z-index: 1;
`
export const BackToHome = styled(NavLink)`
  height: 2.5rem;
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
    position: relative;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${props => props.theme["yellow-dark"]};
    }

    span {
      position: absolute;
      right: -8px;
      top: -8px;
      background: ${props => props.theme["yellow-dark"]};
      color: ${props => props.theme.white};
      border-radius: 100%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`
