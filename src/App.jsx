import React from "react"
import './App.css'
import Menu from "./pages/Menu"
import { CartProvider } from "./context/CartContext"
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Menu/>
      </CartProvider>
      <Home/>
    </div>
  )
}

export default App



