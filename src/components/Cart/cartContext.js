import { createContext, useReducer, useEffect, useState, useContext } from "react";
import {cartFunc} from './cartReducer'
const axios = require('axios');

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [state, dispatch] = useReducer(cartFunc, cart);

  useEffect(() => {
    axios.get('https://e-commerce-backend.harshporwal1.repl.co/cart')
      .then(response => setCart(response.data))
  })

  return (
    <CartContext.Provider value={{ dispatch, state, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

