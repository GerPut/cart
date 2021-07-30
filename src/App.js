import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Cart from './Cart';
import { CartProvider } from "react-use-cart"

function App() {
  return (

    <CartProvider>
      <Hero />
      <Cart />
    </CartProvider>

  );
}

export default App;
