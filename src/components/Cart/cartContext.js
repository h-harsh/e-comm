import { createContext, useReducer, useEffect, useContext } from "react";
import { cartFunc } from './cartReducer'
import { baseurl } from "../../utils/apiCalls";
import { useAuth } from "../../Auth/authContetxt";
const axios = require('axios');


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const{token} = useAuth()
  const [state, dispatch] = useReducer(cartFunc, []);
  
    useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseurl}/cart`)
      console.log(response)
      if(response.status === 200){
        console.log(response.data.cartData)
        dispatch({ type: "LOAD_DATA", payload: response.data.cartData })
      }
    })()
  }, [token])

  return (
    <CartContext.Provider value={{ dispatch, state }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

