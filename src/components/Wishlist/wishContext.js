import { createContext, useContext, useEffect, useReducer } from "react";
import { wishListReducer } from "./wishlistReducer";
const axios = require('axios');
 
export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, [])
  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/wishlist" 

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseUrl}`)
      dispatch({ type: "LOAD_WISHLIST_DATA", payload: response.data })
    })()
  }, [])

  const addToWishList = async (product) => {
    const response = await axios.post(`${baseUrl}/${product._id}`)
    if (response.status === 200) {
      console.log(response.status)
      dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    } else {
      console.log("error")
    }
  }
console.log(state)
  const removeFromWishList = async (product) => {
    const response = await axios.delete(`${baseUrl}/${product.id}`)
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
    } else {
      console.log("error")
    }
  }

  return (
    <WishContext.Provider value={{ wishState: state , addToWishList, removeFromWishList, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => {
  return useContext(WishContext);
};


// const addToWishList = (product) => {
  //   wish.map(item => {
  //     if (item.id === product.id) {
  //       axios.delete(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product.id}`)
  //         .then(response => console.log(response))
  //       return ''
  //     } else if (item.id !== product.id) {
  //       console.log("adding tos wishlist", product)
  //       axios.post(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product._id}`)
  //         .then(response => console.log(response.data))
  //       return ''
  //     }
  //   })
    // console.log("adding tos wishlist", product)
    // axios.post(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product._id}`)
    // .then(response => console.log(response.data)) 
  // };