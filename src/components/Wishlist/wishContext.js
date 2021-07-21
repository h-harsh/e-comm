import { createContext, useContext, useEffect, useReducer } from "react";
import { wishListReducer } from "./wishlistReducer";
import {baseurl} from '../../utils/apiCalls'
import axios from 'axios'
import { useAuth } from "../../Auth/authContetxt";
 
export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const {token} = useAuth()
  const [state, dispatch] = useReducer(wishListReducer, [])

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseurl}/wishlist`)
      dispatch({ type: "LOAD_WISHLIST_DATA", payload: response.data.Wishlist })
    })()
  }, [token])

  const addToWishList = async (product) => {
    const response = await axios.post(`${baseurl}/wishlist/${product._id}`, {})
    if (response.status === 200) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    } else {
      console.log("error")
    }
  }
// console.log(state)
  const removeFromWishList = async (product) => {
    const response = await axios.delete(`${baseurl}/wishlist/${product._id}`)
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


