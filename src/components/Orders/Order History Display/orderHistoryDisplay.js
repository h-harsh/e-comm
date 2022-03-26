import "./orderHistoryDisplay.css";
import { baseurl } from "../../../utils/apiCalls";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Auth/authContetxt";
import { OrderCard } from "../../Cards/Order Card/orderCard";
import Loader from "react-loader-spinner";

export const OrderHistoryDisplay = () => {
  const [orders, setOrders] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseurl}/order`);
      setOrders(response.data.allOrders.reverse());
    })();
  }, [token]);
  console.log(orders);

  return (
    <div style={{display:'inline-block', marginTop:'1rem'}}> 
      <h2 >View Recent Orders</h2>
      {orders === null ? (
        <div className="loader-prod">
        <Loader
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
      ) : orders.length === 0 ? (
        <h3>No Orders yet</h3>
      ) : (
        <div>
          {orders.map((item) => (
            <OrderCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
