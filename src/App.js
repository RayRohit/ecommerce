import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
import Home from './Components/Home/Home';
import Navb from './Components/Navb';
import CartItem from './Components/Products/CartItem';
import Products from './Components/Products/Products';
function App() {
  return (
    <BrowserRouter>
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products/:id' element={<CartItem />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
