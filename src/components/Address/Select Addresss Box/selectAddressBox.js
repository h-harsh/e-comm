/* eslint-disable */
import "../View Address Box/viewAddressBox.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../../utils/apiCalls";
import { useCart } from "../../Cart/cartContext";
import { OrderSuccessBox } from "../../Orders/Order Success Box/orderSuccessBox";
import Loader from "react-loader-spinner"; 
import { useAuth } from "../../../Auth/authContetxt";

export const SelectAddressBox = ({
  setAddAddress,
  allAddresses,
  fetchAddress,
}) => {
  const { dispatch} =useCart()
  const [selectedAddressId, setSelectedAddressId] = useState();
  const [order_id, setOrder_id] = useState();
  const [paymentVerified, setPaymentVerified] = useState(false);

  const [payment, setPayment] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [signature, setSignature] = useState("");

  const {user} = useAuth()
console.log(user)
  useEffect(() => {
    (async function () {
      if (payment) {
        const response = await axios.post(
          `${baseurl}/order/placed/${order_id}`,
          { orderId, paymentId, signature }
        );

        if (response.data.order.paymentStatus === "Received") {
          setPaymentVerified(true);
        }
        // call to reload cart
        const response2 = await axios.get(`${baseurl}/cart`)
      if(response2.status === 200){
        console.log(response2.data.cartData)
        dispatch({ type: "LOAD_DATA", payload: response2.data.cartData })
      }
      }
    })();
  }, [payment]);

  const addressSelector = (e) => {
    setSelectedAddressId(e.target.value);
  };

  const paymentHandler = async () => {
    const response = await axios.post(`${baseurl}/order/create`, {
      addressId: selectedAddressId,
    });
    console.log(response);
    setOrder_id(response.data.receipt);
    if (response.status !== 200) {
      return;
    }

    const options = {
      key: "rzp_test_K5dH6XBR7bi41N",
      amount: response.data.amount,
      currency: "INR",
      name: "FinStore",
      description: "For testing use payment@ybl as upi ID",
      // description: response.data.notes.description,
      image: "",
      order_id: response.data.id, 
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        setOrderId(response.razorpay_order_id);
        setSignature(response.razorpay_signature);
        setPayment(true);
      },
      prefill: {
        name: user !== null ? user.fullName : "",
        email: user !== null ? user.email : "testing@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "black",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };

  return (
    <div>
      {!payment ? (
        <div className="address-display-cont">
          <h1 style={{marginBottom:'1rem'}} >Select a Address for Delivery</h1>
          <button
            className="nm-btn2 add-address-btn"
            onClick={() => setAddAddress(true)}
          >
            Add new address
          </button>
          {allAddresses.length > 0 ? (
            allAddresses.map((item) => {
              return (
                <div className="address-display-box">
                  <input
                    name="address"
                    type="radio"
                    value={item._id}
                    onChange={(e) => addressSelector(e)}
                  />
                  <h5>{item.fullName}</h5>
                  <p>
                    {item.buildingName}, {item.area}
                  </p>
                  <p>{item.landmark}</p>
                  <p>
                    {item.city}, {item.pinCode}, {item.state}
                  </p>
                  <p></p>
                </div>
              );
            })
          ) : (
            <h1>No Addresses added yet</h1>
          )}
          <button
            disabled={selectedAddressId ? false : true}
            className={selectedAddressId ? "nm-btn2" : "nm-btn2 btn2-disabled"}
            onClick={() => paymentHandler()}
          >
            Continue 
          </button>
        </div>
      ) : payment && paymentVerified ? (
        <OrderSuccessBox/>
      ) : (
        <div className="loader-prod">
        <Loader
        type="ThreeDots"
        color="black"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
      )}
    </div>
  );
};
