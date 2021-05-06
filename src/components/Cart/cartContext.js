import { createContext, useReducer, useEffect, useState } from "react";
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

const cartFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      console.log(payload._id)
      axios.post('https://e-commerce-backend.harshporwal1.repl.co/cart', { ...payload, qty: 1 })
      break;
    case "ADD1":
      console.log(payload.id)
      axios.post(`https://e-commerce-backend.harshporwal1.repl.co/cart/${payload.id}`, { qty: payload.qty + 1 })
      break;
    case "LESS1":
      if (payload.qty === 1) {
        axios.delete(`https://e-commerce-backend.harshporwal1.repl.co/cart/${payload.id}`)
      } else {
        axios.post(`https://e-commerce-backend.harshporwal1.repl.co/cart/${payload.id}`, { qty: payload.qty - 1 })
      }
      break;
    case "REMOVE":
      console.log(payload.id)
      axios.delete(`https://e-commerce-backend.harshporwal1.repl.co/cart/${payload.id}`)
      break;
    default:
      break;
  }
};
