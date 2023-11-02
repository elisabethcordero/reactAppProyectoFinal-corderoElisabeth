
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import checkout from './components/Checkout/Checkout';

import { CartProvider } from './context/CartContext';
import LoadProducts from './components/LoadProducts/LoadProducts';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting = {''}/>} />
            <Route path="categorias/:categoryId" element={<ItemListContainer/>} />
            <Route path="item/:itemId" element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path= '/checkout' element={<Checkout/>} />
            <Route path="*" element={<h1>Not Found!</h1>} />
            <Route path="/initial-loading" element={<LoadProducts/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
