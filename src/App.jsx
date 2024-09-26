import React from "react"
import './App.css'
import Menu from "./pages/Menu"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Menu/>
      </CartProvider>
    </div>
  )
}

export default App



