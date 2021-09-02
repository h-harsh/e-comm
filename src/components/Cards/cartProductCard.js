import { useCart } from "../Cart/cartContext";
import {WishButton2 } from '../Buttons/wish-button'
import axios from "axios";
import { useState } from "react";
import { baseurl } from "../../utils/apiCalls";
import { toast } from "react-toastify";

export const CartCard = ({ product }) => {
  const { dispatch } = useCart();
  
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [less, setLess] = useState(false);

  //   Cart Functions
  const increaseQuantity = async (product) => {
    setAdd(true);
    const response = await axios.post(`${baseurl}/cart/${product._id}/inc`, {});
    console.log(response)
    if (response.status === 200) {
      dispatch({ type: "INCREASE_QTY", payload: product });
      toast.success("Quantity Increased")
      setAdd(false);
    }
    setAdd(false);
    
  };

  const decreaseQuantity = async (product) => {
    if (product.qty > 1) {
      setLess(true);
      const response = await axios.post(`${baseurl}/cart/${product._id}/dec`, { });
      if (response.status === 200) {
        dispatch({ type: "DECREASE_QTY", payload: product });
        toast.success("Quantity Decreased")
      }
    } else {
      removeFromCart(product);
    }
    setLess(false);
    
  };

  const removeFromCart = async (product) => {
    setRemove(true);
    const response = await axios.delete(`${baseurl}/cart/${product._id}`);
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
      toast.success("Product Removed")
      setRemove(false);
    }
    setRemove(false);
    
  };

  return (
    <div class="horiz-card">
      <div class="horiz-prod">
        <div class="horiz-prod-sub">
          <div>
            <img class="horiz-prod-img" src={product.image} alt="" />
          </div>
          <div class="horiz-prod-sub-in">
            <p class="brand-name">{product.brand}</p>
            <h3 class="product-name">{product.name}</h3>
            <p class="prod-desc">A sample product line for temp use</p>
            <div class="horiz-prod-btns">
              
              <button
                class="btn btn-link1 horiz-"
                onClick={() => decreaseQuantity(product)}
              >
                {less ? "O" : "-"}
              </button>
              <p class="horiz-prod-qty">{product.qty}</p>
              <button
                class="btn btn-link1 horiz-"
                onClick={() => increaseQuantity(product)}
              >
                {add ? "O" : "+"}
              </button>
            </div>
          </div>
        </div>

        <div class="horiz-prod-price">
          <div class="horiz-prod-price1">₹ {Math.round(product.price - (product.price * (product.discount/100))) * product.qty }</div>
        </div>
        
      </div>
      <div class="buttons-horizontal">
        <button class="nm-btn2 horiz" onClick={() => removeFromCart(product)}>
          {remove ? "removing" : "Remove"}
        </button>
          <WishButton2  product={product} />
      </div>
    </div>
  );
};
