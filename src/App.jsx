import React from "react"
import './App.css'
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import ProductsDetails from "./pages/Products-details"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="menu" element={<Menu />} />
          <Route path="/products" element={<ProductsDetails />} />
          {/* <Route path="cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



