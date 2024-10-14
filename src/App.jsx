import React from 'react'
import './App.css'
import Menu from "./pages/Menu"
import ProductsDetails from "./pages/Products-details"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import Cart from './pages/Cart'
import { ProductsProvider } from './context/ProductsContext'



function App() {
  return (
    <ProductsProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="/category/:category" element={<Menu />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </ProductsProvider>
  )
}

export default App



