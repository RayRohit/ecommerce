import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
import Home from './Components/Home/Home';
import Navb from './Components/Navb';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
