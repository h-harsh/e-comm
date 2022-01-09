import { Link } from "react-router-dom";
import { useCart } from "../Cart/cartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../utils/apiCalls";
import { useAuth } from "../../Auth/authContetxt";
import { InToast } from "../Toast/toast";
import './buttons.css'
import { ToastContainer, toast } from 'react-toastify';

export const CartButton = ({ product }) => {
  const { state, dispatch } = useCart();
  const [idArray, setIdArray] = useState([]);
  const [loading, setloading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false)
  const {token} = useAuth();

  useEffect(() => {
    setIdArray(
      state.map((item) => {
        return item.id || item._id;
      })
    );
  }, [state]);

  const addToCart = async (product) => {
    console.log(product)
    setloading(true);
    const response = await axios.post(`${baseurl}/cart/${product._id}`, { });
    if (response.status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success("Added to cart")
      setloading(false);
    }
    setloading(false);
    
  };

  return (
    <>
      {idArray.includes(product._id || product.id) ? (
        <Link to="/cart">
          <button className="nm-btn2">Go To Cart</button>
        </Link>
      ) : (
        <div className="cart-btn-box">
        <button
          className={product.inStock ? "sp-button" : "nm-btn2 btn2-disabled"}
          disabled={product.inStock ? false : true}
          // onClick={() => addToCart(product)}
          onClick={token ? () => addToCart(product) : () => toast.error("You need to login") }
        >
          <span>{loading ? "Adding" : "Add to cart"}</span>
        </button>
        {product.inStock ? null : <p>Out of stock</p>}
        </div>
      )}
      {toastStatus ? ( <div onClick={() => setToastStatus(false)}> <InToast value={true} text={"You need to login"} /> </div> ) : null}
    </>
  );
};