import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
`
