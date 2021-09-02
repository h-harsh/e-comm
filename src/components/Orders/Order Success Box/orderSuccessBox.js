import { Link } from "react-router-dom";
import './orderSuccessBox.css'

export const OrderSuccessBox = () => {
  return (
    <div className="order-success-box">
      <img src="https://i.ibb.co/Xzd7kxS/tick.png" alt="No" />
      <div className="parts">
      <h1>Thankyou for shopping with us</h1>
      <h2>Your order has been placed successfully</h2>
      </div>
      <div className="parts">
      <Link to="/orderHistory">
        <button className="nm-btn2"> View Orders</button>
      </Link>
      <Link to="/">
        <button className="nm-btn2">Go To Home</button>
      </Link>
      </div>
      
    </div>
  );
};
