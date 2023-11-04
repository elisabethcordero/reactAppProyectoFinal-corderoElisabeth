
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
          <div className="p-12">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting = {''}/>} />
              <Route path="categorias/:categoryId" element={<ItemListContainer/>} />
              <Route path="item/:itemId" element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path= '/checkout' element={<Checkout/>} />
              <Route path="*" element={<h1>Not Found!</h1>} />
              <Route path="/initial-loading" element={<LoadProducts/>} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
      <footer className="bg-gray-200 py-4 text-center fixed bottom-0 w-full">
  <p className="text-gray-600">© 2023 Inksumos. Todos los derechos reservados.</p>
  </footer>
    </div>
  );
 

}

export default App;
