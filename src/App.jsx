import React from 'react'
import './App.css'
import Menu from "./pages/Menu"
import ProductsDetails from "./pages/Products-details"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product" element={<ProductsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



