import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { CoffeesContextProvider } from "./context/CoffeesContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
