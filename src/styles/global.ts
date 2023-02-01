import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  scrollbar-width: thin;          
  scrollbar-color: ${props => props.theme.purple} ${props =>
  props.theme['purple-dark']};  
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
}

body{
  background:${props => props.theme.background} ;
  color: ${props => props.theme['base-text']};
  -webkit-font-smoothing:antialiased;
}

body,input,textarea,button{
  font-family:'Roboto',sans-serif;
  font-weight: 400;
  font-size: 1rem;

}

*::-webkit-scrollbar {
  width: 5px;             
}

*::-webkit-scrollbar-track {
  background: ${props => props.theme.purple};        
}

*::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme['purple-dark']};    
       
 
}




`
