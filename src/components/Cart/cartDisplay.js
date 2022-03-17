/* eslint-disable */
import './cart.css';
import { useCart } from "./cartContext";
import { CartCard } from "../Cards/cartProductCard";
import "./cart.css";
import { useEffect, useState } from "react";
import {Loader} from '../Loader/loader'
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../New Components";

export const CartDisplay = () => {
  const { state } = useCart();
  const [mrp, setMrp] = useState(0);
  const [dizcount, setDizcount] = useState(0);

  const delCh = 250;

  useEffect(() => {
    let totalMRP = state.reduce(
      (a, b) => {
        return { price: a.price + b.price * b.qty };
      },
      { price: 0 }
    );
    setMrp(totalMRP.price);

    setDizcount(
      state
        .map((product) => {
          if (product.qty > 1) {
            return (
              Math.round(product.price * (product.discount / 100)) * product.qty
            );
          } else {
            return Math.round(product.price * (product.discount / 100));
          }
        })
        .reduce((a, b) => a + b, 0)
    );
  }, );
  return (
    <div className="cart-page-outer">
      <div>
        {state?.map((product) => {
          return <CartCard product={product} cartFunc />;
        })}
      </div>
      {state.length < 1 || state.length === undefined ? (
        <Loader text={"Cart is Empty."} />
      ) : (
        <div className="checkout-box only-card bg-color-white">
          <div className="sub-fields">
            <p className="final-details">Final Details({state.length} items)</p>
          </div>
          <div className="sub-fields">
            <p>Total MRP</p>
            <p>₹ {mrp} </p>
          </div>
          <div className="sub-fields">
            <p>Discount on MRP</p>
            <p>-₹ {dizcount}</p>
          </div>
          <div className="sub-fields">
            <p>Delivery Charges</p>
            <p>₹ {delCh} </p>
          </div>
          <br />
          <div className="sub-fields total-amount">
            <p>Total Amount</p>
            <p>₹ {mrp - dizcount + delCh}</p>
          </div>
          <div className="sub-fields battan">
          <Link to="/order"><PrimaryButton text="Checkout"/></Link>
          </div>
        </div>
      )}
    </div>
  );
};
