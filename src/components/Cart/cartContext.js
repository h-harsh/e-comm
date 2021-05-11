import { createContext, useReducer, useEffect, useContext } from "react";
import { cartFunc } from './cartReducer'
const axios = require('axios');

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartFunc, []);

  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/cart"

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseUrl}`)
      dispatch({ type: "LOAD_DATA", payload: response.data })
    })()
  }, [])

 

  const addToCart = async (product) => {
    const response = await axios.post(`${baseUrl}`, { ...product, qty: 1 })
    if (response.status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: product })
    }
  }

  const increaseQuantity = async (product) => {
    const response = await axios.post(`${baseUrl}/${product.id}`, { qty: product.qty + 1 })
    if (response.status === 200) {
      dispatch({ type: "INCREASE_QTY", payload: product })
    }
  }

  const decreaseQuantity = async (product) => {
    if (product.qty > 1){
      const response = await axios.post(`${baseUrl}/${product.id}`, { qty: product.qty - 1 })
      if (response.status === 200) {
        dispatch({ type: "DECREASE_QTY", payload: product })
      } 
    } else {
      removeFromCart(product)
    }
  }

  const removeFromCart = async (product) => {
    const response = await axios.delete(`${baseUrl}/${product.id}`)
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product })
    }
  }


  return (
    <CartContext.Provider value={{ dispatch, state, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

