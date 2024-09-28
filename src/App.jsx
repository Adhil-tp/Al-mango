import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import Header from "./components/Navbar"
// import Footer from './components/Footer'
// import React from "react"
import './App.css'
// import Menu from "./pages/Menu"
// import ProductsDetails from "./pages/Products-details"
// import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
// import Home from "./pages/Home"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  <AppLayout/>
    </>
  )
}

export default App
