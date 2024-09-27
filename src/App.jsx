import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ProductsDetails from "./pages/Products-details"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="menu" element={<Menu />} />
          <Route index element={<ProductsDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
