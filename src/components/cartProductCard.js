import { useCart } from "./Cart/cartContext";
import {WishButton,WishButton2 } from './Buttons/wish-button'
import axios from "axios";
import { useState } from "react";

export const CartCard = ({ product }) => {
  const { dispatch } = useCart();
  const baseUrl = "https://e-commerce-backend.harshporwal1.repl.co/cart";
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [less, setLess] = useState(false);

  //   Cart Functions
  const increaseQuantity = async (product) => {
    setAdd(true);
    const response = await axios.post(`${baseUrl}/${product._id}`, {
      qty: product.qty + 1,
    });
    if (response.status === 200) {
      dispatch({ type: "INCREASE_QTY", payload: product });
      setAdd(false);
    }
    setAdd(false);
  };

  const decreaseQuantity = async (product) => {
    if (product.qty > 1) {
      setLess(true);
      const response = await axios.post(`${baseUrl}/${product._id}`, {
        qty: product.qty - 1,
      });
      if (response.status === 200) {
        dispatch({ type: "DECREASE_QTY", payload: product });
      }
    } else {
      removeFromCart(product);
    }
    setLess(false);
  };

  const removeFromCart = async (product) => {
    setRemove(true);
    const response = await axios.delete(`${baseUrl}/${product._id}`);
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
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
            <p class="brand-name">Brand nam</p>
            <h3 class="product-name">{product.name}</h3>
            <p class="prod-desc">Hello ye bhi altu faltu product hai</p>
            <div class="horiz-prod-btns">
              <button
                class="btn btn-link1 horiz-"
                onClick={() => increaseQuantity(product)}
              >
                {add ? "O" : "+"}
              </button>
              <p class="horiz-prod-qty">{product.qty}</p>
              <button
                class="btn btn-link1 horiz-"
                onClick={() => decreaseQuantity(product)}
              >
                {less ? "O" : "-"}
              </button>
            </div>
          </div>
        </div>
        <div class="horiz-prod-price">
          <div class="horiz-prod-price1">{product.price}</div>
          <div class="horiz-prod-price2">
            <p class="price-orig">₹ 1599</p>
            <p>(45% off)</p>
          </div>
        </div>
      </div>
      <div class="buttons-horizontal">
        <button class="nm-btn2 horiz" onClick={() => removeFromCart(product)}>
          {remove ? "removing" : "Remove"}
        </button>
        {/* <button class="nm-btn2 horiz"> */}
          {/* <i class="far fa-heart"></i> */}
          <WishButton2  product={product} />
        {/* </button> */}
      </div>
    </div>
  );
};
