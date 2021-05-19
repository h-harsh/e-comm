import { useCart } from "./cartContext";
import { CartCard } from "../Cards/cartProductCard";
import "./cart.css";

export const CartDisplay = () => {
  const { state } = useCart();
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      position: 'relative'
    }}>
      <div>
        {state.map((product) => {
          return <CartCard product={product} cartFunc />;
        })}
      </div >
      <div className="checkout-box">
        <div className="sub-fields" >
          <p className="final-details" >Final Details(2 items)</p>
        </div>
        <div className="sub-fields">
          <p>Total MRP</p>
          <p>₹ 7899 </p>
        </div>
        <div className="sub-fields">
          <p>Discount on MRP</p>
          <p>₹ 899</p>
        </div>
        <div className="sub-fields">
          <p>Delivery Charges</p>
          <p>₹ 1000 </p>
        </div>
        <br/>
        <div className="sub-fields total-amount">
          <p  >Total Amount</p>
          <p>₹ 8000</p>
        </div>
        <div className="sub-fields battan">
        <button className="nm-btn2" >Checkout</button>
        </div>
      </div>
    </div>
  );
};
