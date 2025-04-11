import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header.jsx";

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
