import { ProductOrderCard } from "../Product Order Card/productOrderCard";
import "./orderCard.css";

export const OrderCard = ({ item }) => {
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
//    {/* <p>{item.date.toLocaleDateString("en-US", options)}</p> */}
  return (
    <div className="order-main-box  only-card ">
      <div className="order-p1">
        <p> <span>Order Id:</span> {item.orderId}</p>
        <p> <span>Total Amount:</span> ₹{item.amount}</p>
      </div>
     
      <div className="order-p2">
        <p> <span>Date:</span> {item.date}</p>
        <p><span>Payment:</span>{item.paymentStatus}</p>
      </div>
      {item.products.map((product) => (
        <ProductOrderCard product={product} />
      ))}

      <div>
        <p>Delivery Address:</p>
        {item.address.map((address) => {
          return (
            <div className="address-display-box address-display-box-order">
              <h5>{address.fullName}</h5>
              <p>
                {address.buildingName}, {address.area}
              </p>
              <p>{address.landmark}</p>
              <p>
                {address.city}, {address.pinCode}, {address.state}
              </p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
