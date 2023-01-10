import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompletedPurchaseScreen } from './pages/CompletedPurchaseScreen'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/finalizado" element={<CompletedPurchaseScreen />} />
      </Route>
    </Routes>
  )
}
