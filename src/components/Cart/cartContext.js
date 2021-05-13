import { createContext, useReducer, useEffect, useContext, useState } from "react";
import { cartFunc } from './cartReducer'
const axios = require('axios');

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartFunc, []);
  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/cart";
  
    useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseUrl}`)
      dispatch({ type: "LOAD_DATA", payload: response.data })
    })()
  }, [])

  return (
    <CartContext.Provider value={{ dispatch, state }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

