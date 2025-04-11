import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Checkout from './pages/checkout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
