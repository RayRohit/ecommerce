import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
