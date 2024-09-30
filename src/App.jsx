import React from "react"
import './App.css'
import Menu from "./pages/Menu"
// import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="menu" element={<Menu />} />
          <Route path="product" element={<ProductsDetails />} />
          {/* <Route path="cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



