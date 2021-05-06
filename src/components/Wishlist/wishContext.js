import { createContext, useContext, useState, useEffect } from "react";
const axios = require('axios')
 
export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    axios.get('https://e-commerce-backend.harshporwal1.repl.co/wishlist')
      .then(response => setWish(response.data))
    // axios.post(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/6086c1a338588900a6e3d68d`)
    //   .then(response => console.log(response.data))
  })

  const addToWishList = (product) => {
    wish.map(item => {
      if (item.id === product.id) {
        axios.delete(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product.id}`)
          .then(response => console.log(response))
        return ''
      } else if (item.id !== product.id) {
        console.log("adding tos wishlist", product)
        axios.post(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product._id}`)
          .then(response => console.log(response.data))
        return ''
      }
    })
    // console.log("adding tos wishlist", product)
    // axios.post(`https://e-commerce-backend.harshporwal1.repl.co/wishlist/${product._id}`)
    // .then(response => console.log(response.data)) 
  };

  return (
    <WishContext.Provider value={{ wish, addToWishList }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => {
  return useContext(WishContext);
};
