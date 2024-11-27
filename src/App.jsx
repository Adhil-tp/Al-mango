import React from 'react'
import './App.css'
import Menu from "./pages/Menu"
import ProductsDetails from "./pages/Products-details"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from './pages/Cart'
import { ProductsProvider } from './context/ProductsContext'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <ProductsProvider>
     <BrowserRouter>
      {/* <Toaster  containerStyle={{top:400,left:20,bottom:20,right:20}}/> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}  />
          <Route path="/category/:category" element={<Menu />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </ProductsProvider>
  )
}

export default App



