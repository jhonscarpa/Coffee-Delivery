import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { CoffeesContextProvider } from './context/CoffeesContext'
import { initializeApp } from 'firebase/app'
import { ToastContainer } from 'react-toastify'

const firebaseConfig = {
  apiKey: 'AIzaSyCEA6bEaLprhHCOd-IT8PwmUgPM0T0vZzw',
  authDomain: 'coffee-delivery-portifolio.firebaseapp.com',
  projectId: 'coffee-delivery-portifolio',
  storageBucket: 'coffee-delivery-portifolio.appspot.com',
  messagingSenderId: '7539429443',
  appId: '1:7539429443:web:35cfe11a6a04c2dd3844f6',
}

initializeApp(firebaseConfig)

export { firebaseConfig }

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  )
}

export default App
